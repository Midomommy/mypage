const { createApp, ref, component } = Vue;
const app = Vue.createApp({
  // components: {
  //   "header-component": {
  //     template: "#header-component",
  //   },
  // },
  setup() {
    const views = ref({});

    //   onMounted(()=>{

    // })

    getViewsData();
    function getViewsData() {
      axios.get("http://localhost:3000/views").then((res) => {
        views.value = res.data;
        console.log(res.data);
      });
    }

    return {
      views,
    };
  },
});
// const app = Vue.createApp({});
app.component("header-component", {
  template: "#header-component", // 這裡是元件的模板
});
app.mount("#app");

// axios
//   .post("http://localhost:3000/posts", {
//     title: "json-server",
//     author: "typicode2",
//   })
//   .then((res) => {
//     console.log(res);
//   });
