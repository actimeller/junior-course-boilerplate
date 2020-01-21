import React from 'react';
import {withRouter} from 'react-router';
import Title from '../../components/Title/Title';
import {Link} from 'react-router-dom';

import iconBack from '../../assets/images/icon-back.svg'
import planetPicture from '../../assets/images/ill-planet.svg'
import s from './Detail.module.scss'
import AddToBasketContainer from '../../containers/AddToBasketContainer';
import ProductItemWrapper from '../../components/ProductItemWrapper/ProductItemWrapper';

// </div>
class Detail extends React.Component {
    render() {
        const {item, isLoading} = this.props;
        if (isLoading) {
            return (
                <div className={s.Detail}>
                    <div className={s.DetailTitle}>
                        <Link to="/"><img src={iconBack} alt="Назад"/></Link>
                    </div>
                    <div className={s.DetailBody}>
                        <ProductItemWrapper item={item} isLoading={isLoading}/>
                    </div>
                </div>
            )
        } else if (item) {
            return (
                <div className={s.Detail}>
                    <div className={s.DetailTitle}>
                        <Link to="/"><img src={iconBack} alt="Назад"/></Link><Title>{item.name}</Title>
                    </div>
                    <div className={s.DetailBody}>
                        <ProductItemWrapper item={item} isLoading={isLoading}/>
                        <AddToBasketContainer item={item}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={s.DetailEmpty}>
                    <div className={s.DetailTitle}>
                        <Link to="/"><img src={iconBack} alt="Назад"/></Link><Title>Товар не найден</Title>
                    </div>
                    <img src={planetPicture} alt="Товар не найден"/>
                </div>
            )
        }
    }
}

export default withRouter(Detail);


