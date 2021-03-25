import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cn from 'classnames';

import {SortType} from '../../const';
import {ActionCreator} from '../../store/action';

const Sorting = (props) => {
  const {activeSortType, onSortTypeChange} = props;
  const [isListDropped, setListDropped] = useState(false);

  const handleFormClick = () => {
    setListDropped(!isListDropped);
  };

  const handleItemClick = (evt) => {
    evt.preventDefault();
    onSortTypeChange(evt.target.dataset.sortType);
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

Sorting.propTypes = {
  activeSortType: PropTypes.string,
  onSortTypeChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChange(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
