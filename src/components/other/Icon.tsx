import {FC} from "react";
interface Props {
    name: string,
    width: string | number,
    height: string | number
};

const Icon: FC<Props> = ({name, width = 24, height = 24}) => {
    return(
        <svg height={height} width={width}>
            <use href={`/sprite.svg#${name}`}/>
        </svg>
    );
};

export default Icon;