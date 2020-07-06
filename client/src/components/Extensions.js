import React from 'react';

const Extensions = ({ data }) => {
  const extensions = [];

  Object.entries(data).map(extensionType => {
    Object.entries(extensionType[1]).forEach(extension => {
      extensions.push(extension[1]);
    });
  });

  return (
    <ul className="twitch-data-list">
      {extensions.map(extension => (
        <li key={extension.id || Math.random()}>
          {extension.active === true ? (
            <>
              <span>ID: {extension.id || 'None'}</span>
              <br />
              <span>Name: {extension.name || 'None'}</span>
              <br />
              <span>Version: {extension.version || 'None'}</span>
            </>
          ) : (
            'Extension is not Active'
          )}
        </li>
      ))}
    </ul>
  );
};

export default Extensions;
