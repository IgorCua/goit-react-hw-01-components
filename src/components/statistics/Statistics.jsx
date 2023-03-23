import stats from "./data.json";
import style from "./Statistics.module.css"

export const Statistics = ({title, stats}) => {
    console.log('title: ', title)
    console.log('stats: ', stats)
    return <section className={style.statistics}>
       {title && (<h2 className={style.title}>{title}</h2>)}
        
        <ul className={style.statList}>
            {stats.map((e) => {
                return <li key={e.id} className={style.item}>
                        <span className={style.label}>{e.label}</span>
                        <span className={style.percentage}>{e.percentage}%</span>
                    </li>
        })}
    </ul>
    </section>    
}