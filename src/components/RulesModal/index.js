import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconClose from "../../images/icon-close.svg"
import IconRules from "../../images/image-rules.svg"

export default function RulesModal() {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='rules-container'>
      <div className='rules-sub-container'>
        <p className="rules-text" onClick={handleModal}>RULES</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          height: "15rem",
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          borderRadius: "8px"
        }}>
          <div className='modal-container'>
            <p className="modal-rules">
              RULES
            </p>
            <img alt="close-icon" src={IconClose} onClick={handleClose} className='icon' />
          </div>
          <img alt="rules-icon" src={IconRules} className='rules-icon' />

        </Box>
      </Modal>
    </div>
  )
}
