
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";


import { ask, chkHealth } from "../services/api";
import { conf } from "variables/env";
import { Loader } from "components/Loader";
import { GeneratedTextView } from "components/GeneratedTextView";

function Assist(props) {
    const [input, setInput] = useState(conf.sampleInput);
    const [prompt, setPrompt] = useState(conf.samplePrompt);
    const [loading, setLoading] = useState(false);
    const [apiCalled, setApiCalled] = useState(false);
    const [err, setErr] = useState(null);
    const [generatedText, setGeneratedText] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);
        setErr(null);
        try {
            const res = await chkHealth(input, prompt);

            console.log('response + ' + res);
            setGeneratedText(res);
        } catch (error) {
            console.log(error)
            if (error?.err?.err?.message) {
                alert(error?.err?.err?.message)
            } else {
                alert(error.message)
            }
            setErr('Opps!! we faced some issue... working on it')

        }
        setApiCalled(true);
        setLoading(false);


    }

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <h5 className="card-category">Problem Statement</h5>
                                        <CardTitle tag="h2">Input</CardTitle>
                                    </Col>
                                    <Col sm="6">
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <div className="chart-area text-center">
                                        <textarea value={input} style={{ width: '90%', height: '20vh' }} onChange={setInput} />
                                    </div>
                                </Row>
                                <Row style={{ padding: 10 }}>
                                    <Col className="text-left " sm="6">
                                        <h5 className="card-category">Rules</h5>
                                        <CardTitle tag="h2">Prompt</CardTitle>
                                    </Col>
                                    <div className="chart-area text-center">
                                        <textarea value={prompt} style={{ width: '90%', height: '10vh' }} onChange={setPrompt} />
                                    </div>
                                    <Col className="text-right">
                                        <ButtonGroup>
                                            <Button onClick={handleSubmit}>Send</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <h5 className="card-category">Generated output</h5>
                                    </Col>
                                    <Col sm="6">
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    {(!apiCalled) && <div className="chart-area text-left" style={{ padding: 20 }}>
                                        Rohit asks Ravi for assistance with understanding how iMPP Assist works. Ravi offers to help and suggests setting up a meeting call at 3 pm today.
                                    </div>}

                                    {(loading) && <div className="chart-area text-left" style={{ padding: 20 }}>
                                        <Loader />
                                    </div>}

                                    {(apiCalled && err) && <div className="chart-area text-left" style={{ padding: 20 }}>
                                        <GeneratedTextView text={err} />
                                    </div>}

                                    {(apiCalled && generatedText) && <div className="chart-area text-left" style={{ padding: 20 }}>
                                        <GeneratedTextView text={generatedText} />
                                    </div>}

                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Assist;
