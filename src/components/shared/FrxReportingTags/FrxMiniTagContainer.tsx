import React from "react";
import "./FrxReportingTags.scss";
import FrxCategoryTag from "./FrxCategoryTag";

function FrxMiniTagContainer(props) {
  const {
    addIcon,
    tag,
    tag: { name, description, categoriesWithColor },
    onClickAdd,
    onClickRemove
  } = props;

  const getRandomTagColor = () => {
    return ["blue", "green", "orange"][Math.floor(Math.random() * 3 + 1)];
  };

  return (
    <div className="container">
      <div className="inner-container">
        <span className="tag-name">{name}</span>
        <div className="category-container">
          {categoriesWithColor.map(category => (
            <FrxCategoryTag
              category={category.name}
              // bgColor={getRandomTagColor()}
              bgColor={category.color}
            />
          ))}
        </div>
        <p className="inner-text">{description}</p>
      </div>
      <div>
        {addIcon ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => onClickAdd(tag)}
          >
            <path
              d="M3 3C0.243029 5.75697 0.243029 10.243 3 13C5.75697 15.757 10.243 15.757 13 13C15.757 10.243 15.757 5.75697 13 3C10.243 0.243029 5.75697 0.243029 3 3ZM11.0769 7.45625C11.1495 7.45439 11.2217 7.46708 11.2893 7.49357C11.3569 7.52006 11.4185 7.55982 11.4705 7.61049C11.5225 7.66117 11.5638 7.72174 11.592 7.78863C11.6202 7.85553 11.6348 7.9274 11.6348 8C11.6348 8.0726 11.6202 8.14447 11.592 8.21137C11.5638 8.27826 11.5225 8.33883 11.4705 8.38951C11.4185 8.44018 11.3569 8.47994 11.2893 8.50643C11.2217 8.53292 11.1495 8.54561 11.0769 8.54375L8.54399 8.54399L8.54375 11.0769C8.54012 11.2187 8.48124 11.3535 8.37966 11.4525C8.27808 11.5515 8.14185 11.6069 8 11.6069C7.85815 11.6069 7.72192 11.5515 7.62034 11.4525C7.51876 11.3535 7.45988 11.2187 7.45625 11.0769L7.45601 8.54399L4.92308 8.54375C4.78128 8.54012 4.6465 8.48124 4.54749 8.37966C4.44849 8.27808 4.39307 8.14185 4.39307 8C4.39307 7.85815 4.44849 7.72192 4.54749 7.62034C4.6465 7.51876 4.78128 7.45988 4.92308 7.45625L7.45601 7.45601L7.45625 4.92308C7.45988 4.78128 7.51876 4.6465 7.62034 4.54749C7.72192 4.44849 7.85815 4.39307 8 4.39307C8.14185 4.39308 8.27808 4.44849 8.37966 4.54749C8.48124 4.6465 8.54012 4.78128 8.54375 4.92308L8.54399 7.45601L11.0769 7.45625Z"
              fill="#1D54B4"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => onClickRemove(tag)}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM4.23684 6.63158C3.93163 6.63158 3.68421 6.879 3.68421 7.18421C3.68421 7.48942 3.93163 7.73684 4.23684 7.73684H10.1316C10.4368 7.73684 10.6842 7.48942 10.6842 7.18421C10.6842 6.879 10.4368 6.63158 10.1316 6.63158H4.23684Z"
              fill="#1F55B6"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default FrxMiniTagContainer;
