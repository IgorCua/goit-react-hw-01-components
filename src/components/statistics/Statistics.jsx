import PropTypes from "prop-types";
// import stats from "./data.json";
import style from "./Statistics.module.css"

export const Statistics = ({title, stats}) => {
    return <section className={style.statistics}>
       {title && (<h2 className={style.title}>{title}</h2>)}
        
        <ul className={style.statList}>
            {stats.map(({id, label, percentage}) => {
                return <li key={id} className={style.item}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage}%</span>
                    </li>
            })}
        </ul>
    </section>    
}

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    item: PropTypes.string,
    percentage: PropTypes.string
}