import React from 'react';

const Extensions = ({ data }) => {
  // console.log(
  //   [...Object.entries(data)].map(exten => {
  //     console.log('exten', exten);
  //     [...Object.entries(exten[1])].forEach(ele => {
  //       console.log('ele', ele[1]);
  //     });
  //   })
  // );

  // const { panel, overlay, component } = data;

  // console.log('panel', panel);

  const ObjectArray = Object.entries(data);
  let extensionsArray = [];
  Object.entries(ObjectArray).forEach(([K, V]) => {
    Object.keys(V).forEach(key => {
      extensionsArray.push(V[key]);
    });
  });
  console.log('extensionsArray', extensionsArray);
  // console.log(ObjectArray);

  // for (const value in panel) {
  //   console.log(panel[value].name);
  // }

  const panelType = Object.entries(data)[0];
  console.log(panelType);
  // let results = [...Object.entries(data)];
  // console.log(Object.values(results));

  // {
  //   [...Object.entries(data)].map(exten =>
  //     [...Object.entries(exten[1])].forEach(ele => (
  //       <li>
  //         (
  //         <span value={Math.random()}>
  //           {ele[0]}: {'hello'}
  //         </span>
  //         )
  //       </li>
  //     ))
  //   );
  // }

  return (
    <ul className="twitch-data-list">
      {Object.entries(data).forEach(([K, V]) =>
        Object.entries(V).forEach(([Ke, Va]) => (
          <li key={Va.id}>
            <span value={Va.id}>
              {/* {console.group(V)} */}
              {console.log('Extension Name', Va.name)}
              Name: {Va.name}
            </span>
          </li>
        ))
      )}
    </ul>
  );
};

export default Extensions;

/*

{
  "data": {
    "panel": {
      "1": {
        "active": true,
        "id": "wi08ebtatdc7oj83wtl9uxwz807l8b",
        "version": "2.2.0",
        "name": "Streamlabs Leaderboard"
      },
      "2": {
        "active": true,
        "id": "naty2zwfp7vecaivuve8ef1hohh6bo",
        "version": "1.0.12",
        "name": "Streamlabs Stream Schedule & Countdown"
      },
      "3": {
        "active": false
      }
    },
    "overlay": {
      "1": {
        "active": false
      }
    },
    "component": {
      "1": {
        "active": false
      },
      "2": {
        "active": false
      }
    }
  }
}
*/
