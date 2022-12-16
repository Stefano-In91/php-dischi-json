const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
      message: "Hello Vue!",
    };
  },
  created() {
    axios.get("api.php").then((resp) => {
      this.disks = resp.data;
    });
  },
}).mount("#app");
