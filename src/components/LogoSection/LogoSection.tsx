import * as React from "react";
import { withTranslation, WithTranslation, Trans } from "react-i18next";
import laptop from "./img/laptop.png";
import "./LogoSection.scss";
const Rellax = require("rellax");

type Props = WithTranslation;

class LogoSection extends React.Component<Props> {
    public componentDidMount() {
        const rellax = new Rellax(".rellax", {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }
    public render() {
        return (
            <div className="Logo-section" id="#home">
                <div
                    className="graph-background rellax"
                    data-rellax-speed="5"
                />
                <div className="computer-continer rellax" data-rellax-speed="2">
                    <img src={laptop} />
                </div>
                <div
                    className="d-flex h-100 w-100 align-items-center justify-content-center rellax"
                    data-rellax-speed="1"
                >
                    <div className="logo-content">
                        <div className="title">
                            <span>CodeChain</span>
                        </div>
                        <div className="description">
                            <Trans i18nKey="logo:subtitle" />
                        </div>
                        <div>
                            <a
                                target="_blank"
                                href="/CodeChain_white_paper_v0.1.0.pdf"
                            >
                                <div className="custom-btn reverse paper-btn">
                                    White Paper
                                </div>
                            </a>
                            <a
                                target="_blank"
                                href="https://explorer.codechain.io"
                            >
                                <div className="custom-btn reverse paper-btn">
                                    Explorer
                                </div>
                            </a>
                            <a
                                target="_blank"
                                href="https://wallet.codechain.io"
                            >
                                <div className="custom-btn reverse paper-btn">
                                    Wallet
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withTranslation()(LogoSection);
