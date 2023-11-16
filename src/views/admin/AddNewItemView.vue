<script setup>
    import {useRouter} from 'vue-router'

    import {reactive} from 'vue';

    import useImage from '@/composables/useImage';

    import {useItemsStore} from '@/stores/itemsStore';

    const router = useRouter();

    const {onFileChange, imageUploaded, url} = useImage();

    const items = useItemsStore();

    const formData = reactive({
        name: '',
        image: '',
        category: '',
        price: '',
    })

    //submit function, form values as data automaticly
    const handleSubmit = async(data) => {
        const {image, ...values} = data;

        try {
            await items.createItem({
                ...values,
                image: url.value
            })

            router.push({name: 'current-menu'})
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <div class="mt-10 container mx-auto">

      <h2 class="text-center text-2xl font-bold">Agregar al menú</h2>
      <p class="text-gray-600 text-center">Aquí podrás agregar nuevos productos a la carta.</p>

        <div class="flex justify-center">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                <FormKit
                    type="form"
                    submit-label="Agregar producto"
                    incomplete-message="Por favor completa los campos"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit 
                        type="text"
                        name="name"
                        label="Titulo"
                        placeholder="Título item"
                        validation="required"
                        :validation-messages="{required: 'El título es obligatorio'}"
                        v-model.trim="formData.name"
                    />

                    <FormKit 
                        type="file"
                        name="image"
                        label="Imagen"
                        validation="required"
                        :validation-messages="{required: 'La imagen es obligatoria'}"
                        accept=".jpg"
                        @change="onFileChange"
                        v-model="formData.image"
                    />

                    <div v-if="imageUploaded">
                        <p class="font-black">Imagen producto: </p>
                        <img :src="url" class="w-32" alt="Nuevo producto imagen"/>
                    </div>

                    <FormKit 
                        type="select"
                        name="category"
                        label="Categoría"
                        validation="required"
                        :validation-messages="{required: 'La categoría es obligatoria'}"
                        v-model.number="formData.category"
                        :options="items.categoryOptions"
                    />

                    <FormKit 
                        type="number"
                        name="price"
                        label="Precio"
                        placeholder="Precio del item"
                        validation="required"
                        :validation-messages="{required: 'El precio es obligatorio'}"
                        min="1"
                        v-model.number="formData.price"
                    />

                </FormKit>
            </div>
        </div>
    </div>
</template>