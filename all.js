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
  template: `<header class="text-bg-dark p-3">
    <div class="container">
      <div
        class="flex-wrap d-flex align-items-center justify-content-center justify-content-lg-start"
      >
        <ul
          class="mb-2 mb-md-0 col-lg-auto col-12 nav me-lg-auto justify-content-center"
        >
          <li><a href="#" class="text-secondary px-2 nav-link">Home</a></li>
          <li><a href="#" class="text-white px-2 nav-link">景點列表</a></li>
          <li>
            <a href="#" class="text-white px-2 nav-link">個人收藏列表</a>
          </li>
        </ul>

        <form class="mb-3 mb-lg-0 col-lg-auto col-12 me-lg-3" role="search">
          <input
            type="search"
            class="text-bg-dark form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">
            Login
          </button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>`,
  setup() {
    return {
      data: ref(0),
    };
  },
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
