import React from 'react';

import './ContextMenu.css'

const ContextMenu = ({ xPos, yPos, options, onClose }) => {
  return (
    <div id="contextMenu" className="context-menu" style={{ top: '30px', left: '100px' }}>
        <ul>
            <li><a href="#">Element-1</a></li>
            <li><a href="#">Element-2</a></li>
            <li><a href="#">Element-3</a></li>
            <li><a href="#">Element-4</a></li>
            <li><a href="#">Element-5</a></li>
            <li><a href="#">Element-6</a></li>
            <li><a href="#">Element-7</a></li>
        </ul>
        <span onClick={onClose}>x</span>
    </div>
  );
};

export default ContextMenu;
