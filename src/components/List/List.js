import React from 'react';
import PropTypes from 'prop-types';
import logRenderComponent from '../../HOC/logRenderComponent';
import s from './List.module.scss';
import {Link} from 'react-router-dom';
import Title from '../Title/Title';
import planetPicture from '../../assets/images/ill-planet.svg';

class List extends React.Component {

    render() {
        const {products, isLoading, itemsPerPage} = this.props;

        if (isLoading) {
            return (
                <ul className={s.list}>
                    {[...Array(itemsPerPage)].map((item, key) => (
                        <li className={s.listItem} key={key}>
                            <div className={s.listItemLoading}>
                                <span className={s.listItemLoadingPhoto}></span>
                                <span className={s.listItemLoadingText}>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )
        } else if (products.length > 0) {
            return (
                <ul className={s.list}>
                    {products.map((item) => {
                        return (
                            <li className={s.listItem} key={item.id}>
                                <Link to={`products/${item.id}`}>

                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            return (
                <div className={s.listEmpty}>
                    <Title>Товары не найдены</Title>
                    <img src={planetPicture} alt="Товар не найден"/>
                </div>
            )
        }
    }
}

List.propTypes = {
    products: PropTypes.array,
    isLoading: PropTypes.bool,
    itemsPerPage: PropTypes.number,
};


export default logRenderComponent(List);
