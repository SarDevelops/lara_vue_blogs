<script setup>
import Editor from '@tinymce/tinymce-vue'
</script>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "CreateBlogs"
})
</script>

<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="text-2xl underline bold ">
                <label>Create Your Blog</label>
            </div>

            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="action.php">

                        <div class="flex justify-center mt-8">
                            <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                                <div class="m-4">
                                    <label class="inline-block mb-2 text-gray-500">Upload
                                        Image(jpg,png,svg,jpeg)</label>
                                    <div class="flex items-center justify-center w-full">
                                        <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                            <div class="flex flex-col items-center justify-center pt-7">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                          clip-rule="evenodd" />
                                                </svg>
                                                <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                    Select a photo</p>
                                            </div>
                                            <input type="file" class="opacity-0" />
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="text-xl text-gray-600">Title <span class="text-red-500">*</span></label><br>
                            <input type="text" class="border-2 border-gray-300 p-2 w-full" name="title" id="title" value="" required>
                        </div>

                        <div class="mb-4">
                            <label class="text-xl text-gray-600">Description</label><br>
                            <input type="text" class="border-2 border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)">
                        </div>

                        <div class="mb-8">
                            <label class="text-xl text-gray-600">Content <span class="text-red-500">*</span></label><br>


                            <Editor
                                api-key="no-api-key"
                                :init="{
        plugins: 'lists link image table code help wordcount'
      }"
                            />
                        </div>

                        <div class="flex p-1">
                            <select class="border-2 border-gray-300 border-r p-2" name="action">
                                <option>Save and Publish</option>
                                <option>Save Draft</option>
                            </select>
                            <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
