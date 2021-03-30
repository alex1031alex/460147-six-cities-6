import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import cn from 'classnames';

import {SortType} from '../../const';
import {changeSortType} from '../../store/action';
import {getActiveSortType} from '../../store/offers/selectors';

const Sorting = () => {
  const activeSortType = useSelector(getActiveSortType);
  const dispatch = useDispatch();

  const [isListDropped, setListDropped] = useState(false);

  const handleFormClick = () => {
    setListDropped(!isListDropped);
  };

  const handleItemClick = (evt) => {
    evt.preventDefault();
    dispatch(changeSortType(evt.target.dataset.sortType));
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleFormClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn({
          'places__options places__options--custom': true,
          'places__options--opened': isListDropped})}
      >
        {Object
          .values(SortType)
          .map((item) => {
            return <li
              className={cn({
                'places__option': true,
                'places__option--active': item === activeSortType
              })}
              tabIndex={0}
              key={item}
              data-sort-type={item}
              onClick={handleItemClick}
            >{item}</li>;
          })
        }
      </ul>
    </form>
  );
};

export default Sorting;
