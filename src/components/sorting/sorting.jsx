import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cn from 'classnames';

import {SortType} from '../../const.js';
import {ActionCreator} from '../../store/action.js';

const Sorting = (props) => {
  const {activeSortType, onSortTypeChange} = props;

  const handleItemClick = (evt) => {
    onSortTypeChange(evt.target.dataset.sortType);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
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

const mapStateToProps = (state) => {
  return {activeSortType: state.activeSortType};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortTypeChange(sortType) {
      dispatch(ActionCreator.changeSortType(sortType));
    },
  };
};

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
