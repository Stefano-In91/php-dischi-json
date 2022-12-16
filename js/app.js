const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
    };
  },
  created() {
    axios.get("api.php").then((resp) => {
      this.disks = resp.data;
    });
  },
}).mount("#app");
