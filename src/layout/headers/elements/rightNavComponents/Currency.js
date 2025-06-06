import React from "react";
import { DollarSign } from "react-feather";
import { useDispatch } from "react-redux";
import useOutsideDropdown from "../../../../utils/useOutsideDropdown";
import { currencyChange } from "@/redux-toolkit/reducers/currencyReducer";

const Currency = ({ value }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const dispatch = useDispatch();

  return (
    <li ref={ref} className={`dropdown currency ${isComponentVisible && "active"}`}>
      <a>
        <DollarSign
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {value.type.map((currency, i) => (
          <li key={i}>
            <a onClick={() =>dispatch(currencyChange(currency))} >{currency.name}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Currency;
