import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

export default function ScrollButton({ onClick, direction }) {
    return direction === 'left' ? (
        <BsFillCaretLeftFill id="left-scroll" className="scroll-btns" onClick={onClick} />
    ) : (
        <BsFillCaretRightFill id="right-scroll" className="scroll-btns" onClick={onClick} />
    );
}