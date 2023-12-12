import styles from './OffCanvasMenu.module.css'
import './OffCanvasMenu.css'
import React from "react";
import {Offcanvas} from "react-bootstrap";
import {OffcanvasPlacement} from "react-bootstrap/Offcanvas";

interface IProps {
   show: boolean
   onHide: () => void
   placement?: OffcanvasPlacement
   children: React.ReactNode
   title?: string
}

const OffCanvasMenu = (props: IProps) => {

   const { show, onHide, placement, children, title } = props

   return (
      <Offcanvas
         show={show}
         onHide={onHide}
         placement={placement || 'end'}
         className={`${styles.wrapper} OffCanvasMenu`}
      >
         <header className={styles.header}>
            <h5>{title || ''}</h5>
            <img src="/images/icons/close.svg" alt="close" className={styles.close} onClick={onHide} />
         </header>

         <div className={styles.content}>
            {children}
         </div>
      </Offcanvas>
   );
};

export default OffCanvasMenu;