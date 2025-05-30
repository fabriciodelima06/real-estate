import { addCompareProducts } from "@/redux-toolkit/reducers/addToCompareReducer";
import React, { Fragment } from "react";
import { Shuffle } from "react-feather";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCompareProducts = ({ id }) => {
  const dispatch = useDispatch();
  const notify = () => toast(`This product added to compare list`, { type: "success" });
  return (
    <Fragment>
      <Shuffle
        onClick={() => {
          dispatch(addCompareProducts(id));
          notify();
        }}
      />
    </Fragment>
  );
};

export default AddToCompareProducts;
