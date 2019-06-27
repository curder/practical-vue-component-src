<template>
  <div class="container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8 my-8 text-gray-700">确认提示</h2>

    <div>
      <form method="POST" action="https://www.google.com">
        <confirm-button message="你确定要注册吗？">
          <button
            type="submit"
            class="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 ml-4"
          >确认提交</button>
        </confirm-button>
      </form>
    </div>
    <div class="mt-10">
      <form method="POST" action="https://www.google.com">
        <confirm-button
          message="你确定要注册吗？"
          cancle-button="返回"
          confirm-button="确认"
          class="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 ml-4"
        >确认提交</confirm-button>
      </form>
    </div>
    <confirm-dialog></confirm-dialog>
  </div>
</template>
<script>
import ConfirmDialog from "../components/ConfirmDialog.vue";
import ConfirmButton from "../components/ConfirmButton.vue";

export default {
  components: {
    ConfirmDialog,
    ConfirmButton
  }
};
</script>
