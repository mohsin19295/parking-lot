import { ADD_SLOT, DELETE_SLOT, EXTEND_SLOT } from "./actions";
import { list } from "./states";

export let reducer = (state = list, action) => {
  let newList = [...state];
  switch (action.type) {
    case ADD_SLOT:
      newList = [...state];
      let index = -1;
      for (let i = 0; i < newList.length; i++) {
        if (action.payload.id <= 50) {
          index++;
          if (newList[i].id == action.payload.id && newList[i].name == null)
            break;
        }
        if (action.payload.id == null) {
          index++;
          if (newList[i].name == null) break;
        }
      }
      if (index != -1) {
        newList[index] = action.payload;
        newList[index].id = index + 1;
        return newList;
      }

      break;
    case DELETE_SLOT:
      newList = [...state];
      let index1 = -1;
      for (let i = 0; i < newList.length; i++) {
        index1++;
        if (newList[i].id == action.payload.id) break;
      }
      if (index1 != -1) {
        newList[index1] = action.payload;
        return newList;
      }

      break;
    case EXTEND_SLOT:
      newList = [...state];
      for (let i = 1; i <= 8; i++) {
        let act = {
          id: newList.length + 1,
          name: null,
          phone: null,
        };
        newList.push(act);
      }
      return newList;

    default:
      break;
  }
  return state;
};
