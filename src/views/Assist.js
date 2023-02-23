
import React from "react";
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

// core components
import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4
} from "variables/charts.js";

function Assist(props) {
    const [bigChartData, setbigChartData] = React.useState("data1");
    const setBgChartData = (name) => {
        setbigChartData(name);
    };
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
                                        <textarea style={{ width: '90%', height: '20vh' }} />
                                    </div>
                                </Row>
                                <Row style={{ padding: 10 }}>
                                    <Col className="text-left " sm="6">
                                        <h5 className="card-category">Rules</h5>
                                        <CardTitle tag="h2">Prompt</CardTitle>
                                    </Col>
                                    <div className="chart-area text-center">
                                        <textarea style={{ width: '90%', height: '10vh' }} />
                                    </div>
                                    <Col className="text-right">
                                        <ButtonGroup>
                                            <Button>Send</Button>
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
                                    <div className="chart-area text-left" style={{ padding: 20 }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                        Why do we use it?
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                                        Where does it come from?
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    </div>
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
