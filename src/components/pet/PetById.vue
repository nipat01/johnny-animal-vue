<template>
  <div>
    <p>this is pet id</p>
  </div>
</template>


<script>
export default {
  data: () => ({
    pets: {
      id: 1,
      joshnnyId: 111,
      name: "john",
      age: "",
      sex: "ผู้ชาย",
      specy: "โฮ่ง",
      color: "back",
      status: "wating love",
      description: "นิสันน่ารักมาก เลี้ยง่่าย",
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgv2R3oUiiUQUCmEL5Lsmw0Qf6oQqa5Jrqg&usqp=CAU",
    },
  }),
  created() {
    console.log(this.$route.params.id);
  },
};
</script>