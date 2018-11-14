import * as React from "react";
/**
 * A stand-in for any arbitrary HTML element that needs to be added for testing purposes
 */
export default class ReactSVGElement extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4014.4 1616.998 4.4 8">
                <g transform="translate(-4128 1600.698)">
                    <path
                        d="M140.6,23.9l3.7-3.6-3.7-3.6.4-.4,4,4-4,4Z"
                        transform="translate(-27)"
                    />
                </g>
            </svg>
        );
    }
}
