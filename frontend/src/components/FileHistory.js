import React from 'react';

const FileHistory = () => {
  const files = [
    { name: 'example-file-1.txt', date: '2024-10-09' },
    { name: 'example-file-2.txt', date: '2024-10-08' }
  ];

  return (
    <div>
      <h2>File History</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} - {file.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileHistory;
