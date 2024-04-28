import React from 'react'

export default function BaseStats(props) {
    const { stats } = props;
  return (
    <div className='section'>
    <h3>Stats</h3>
    {stats?(
    <ul>{stats.map((stat, index) =>  (
    <li key={index}><div><b>{stat.stat.name}</b></div> <progress value={stat.base_stat} max="100"></progress></li>))}
       

    </ul>):(<h1>{"Not available"}</h1>)}
    
</div>
  );
}
