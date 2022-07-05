import React from "react";
import UseCounter from "./UseCounter";
import useFetch from "./useFetch";

export default function PartyList() {
  const { data } = useFetch();
  const{increment,counter} = UseCounter(0)
  console.log(data);
  const filterList = data.users.filter((value) => value.id <= 10);

  return (
    <div className="party-list">
      <div className="container-of-all-button-partylist">
        {
          filterList.map((element, index) => (
            <div className="container-button">
                <h1>{element.id}. {element.lastName}</h1>
              <button  onClick={increment}
                key={index.id}
                className="button-partylist"
                style={{
                  backgroundImage: `url(${element.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              >{counter}</button>
            </div>
          ))}
      </div>
    </div>
  );
}
