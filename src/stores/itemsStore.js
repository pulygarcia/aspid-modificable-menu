import {defineStore} from 'pinia';
import { computed, ref } from 'vue';
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'
import { collection, addDoc, query, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import {ref as storageRef, deleteObject} from 'firebase/storage'

export const useItemsStore = defineStore('items', () => {
    const db = useFirestore();
    const storage = useFirebaseStorage();
    
    const selectedCategory = ref(1);

    const categories = [
        {id: 1, name: 'Pieza'},
        {id: 2, name: 'Combo'}
    ]
    
    const q = query(
        collection(db, 'items')
    );
    
    const itemsCollection = useCollection( q );

    async function createItem(item){
        await addDoc(collection(db, "items"), item)
    }

    async function updateItem(docRef, item){
        const {image, url, ...values} = item;

        if(image.length){
            await updateDoc(docRef, {
                ...values,
                image: url.value
            })
        }else{
            await updateDoc(docRef, values)
        }
    }

    async function deleteItem(id){
        if(confirm('¿Desea eliminar el item?')){
            const docRef = doc(db, 'items', id); //Product reference for delete

            //Get the product image for delete
            const docData = await getDoc(docRef);
            const {image} = docData.data();
            const imageRef = storageRef(storage, image);

            //Delete the product and image at same time
            await Promise.all([
                deleteDoc(docRef),
                deleteObject(imageRef)
            ])
        }
    }

    
    const categoryOptions = computed(() => {
        const options = [
            {label: 'Seleccione la categoría', value: '', attrs: { disabled: true }},
            ...categories.map(category => (
                {label: category.name, value: category.id}
            ))
        ]

        return options
    })

    const noResult = computed(() => {
        return itemsCollection.value.length === 0;
    })


    const filteredItems = computed(() => {
        //Double filter to remove items from this view when the item isnt available (or doesnt have stock)
        return itemsCollection.value.filter(item => item.category === selectedCategory.value);
    })


    return{
        createItem,
        updateItem,
        deleteItem,
        categories,
        selectedCategory,
        filteredItems,
        itemsCollection,
        noResult,
        categoryOptions
    }
})