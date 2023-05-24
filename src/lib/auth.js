import store from "../state/store";
export const guard = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {      
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  }

//   let currentUser = store.getters.currentUser;
//   const { authorize } = to.meta;
//   if(currentUser !== null){
//     if (authorize.length && !authorize.includes(currentUser.role)) {
//       next("/login");
//     }
//   }
  next();
};

export const guest = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next("/");
  } else {
    next();
  }
};
