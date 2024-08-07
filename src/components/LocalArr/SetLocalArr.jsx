import { objBeresheet } from '../../object/obj-books/obj-beresheet';
import { objSchmot } from '../../object/obj-books/obj-schmot';
import { objVaikra } from '../../object/obj-books/obj-vaikra';

const Local = () => {
  let arr = [];

  for (let i = 0; i < objBeresheet.length; i++) {
    arr.push(objBeresheet[i]);
  }

  for (let p = 0; p < objSchmot.length; p++) {
    arr.push(objSchmot[p]);
  }
  localStorage.setItem('tanahArr', JSON.stringify(arr));
};

export default Local;
