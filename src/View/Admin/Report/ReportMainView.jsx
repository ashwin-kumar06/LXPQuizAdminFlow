import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../../Styles/Admin/ReportMainView.css';
export default function ReportMainView() {
    return (
        <>
            <div className="mt-5">
                <h1>Report Main Page</h1>
                <div class="row m-5">
                    <div class="col-sm-6">
                        <Link to={'/learnerreport'} style={{ textDecoration: 'none', color: 'black' }}>
                            <div class="card">
                                <div className="card-header">
                                    <h5 class="card-title">Learner Report</h5>
                                </div>
                                <div class="card-body text-center">
                                    <i class="bi bi-person-lines-fill fs-1"></i>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div class="col-sm-6">
                        <Link to={'/coursereport'} style={{ textDecoration: 'none', color: 'black' }}>
                            <div class="card">
                                <div className="card-header">
                                    <h5 class="card-title">Course Report</h5>
                                </div>
                                <div class="card-body text-center">
                                    <i class="bi bi-book fs-1"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div class="row m-5">
                    <div class="col-sm-6">
                        <Link to={'/quizreport'} style={{ textDecoration: 'none', color: 'black' }}>
                            <div class="card">
                                <div className="card-header">
                                    <h5 class="card-title">Quiz Report</h5>
                                </div>
                                <div class="card-body text-center">
                                    <i class="bi bi-list-check fs-1"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-sm-6">
                        <Link to={'/enrollreport'} style={{ textDecoration: 'none', color: 'black' }}>
                            <div class="card">
                                <div className="card-header">
                                    <h5 class="card-title">Enrollment Report</h5>
                                </div>
                                <div class="card-body text-center">
                                    <i class="bi bi-people fs-1"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >


        </>
    )
}