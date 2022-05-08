import React from 'react';
import { render } from 'react-dom';
import { FaApple } from 'react-icons/fa';
import ColorBar, { Data } from '../lib/ColorBar';
import './style.css';

function Demo() {
  const data: Data[] = [
    {
      value: 300,
      color: '#21bbce',
      tooltip: {
        text: 'yet to be added',
        props: {
          type: 'info',
          place: 'top',
        },
      },
      legend: {
        value: 300,
        label: 'Comprehension',
        icon: <FaApple />,
      },
    }, 
    
    {
      value: 200,
      color: '#4bc97d',
      tooltip: {
        text: 'tax is $200',
        props: {
          type: 'error',
          place: 'top',
        },
      },
      legend: {
        value: 200,
        label: 'Understanding',
        tooltip: {
          text: 'legend supports tooltip',
          props: {
            type: 'error',
            place: 'top',
          },
        },
      },
    }, 
    
    {
      value: 100,
      color: '#eb5be1',
      tooltip: {
        text: 'insurance is $100',
        props: {
          type: 'success',
          place: 'top',
        },
      },
      legend: {
        value: 100,
        label: 'Application',
      },
    },
     {
      value: 300,
      color: 'red',
      tooltip: {
        text: "I don't have legend",
        props: {
          type: 'success',
          place: 'bottom',
        },
      },
    },
  ];
  return (
    <div className="container">
      <h3 style={{textAlign:"center"}}>Bloom Taxonomy</h3>
      <ColorBar data={data} />
    </div>
  );
}

export default Demo;
