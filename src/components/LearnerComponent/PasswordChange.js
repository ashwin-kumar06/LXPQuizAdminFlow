import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import { validatePassword } from '../../utils/LearnerValidations/ValidationforPasswordChange';
import { useSelector, useDispatch } from 'react-redux';
import { UpdatePasswordRequest } from '../../actions/LearnerAction/PasswordChangeAction';
import LearnerDashboard from './LearnerDashboard';
import LearnerNavbar from '../../components/LearnerComponent/LearnerNavbar';
import '../../Styles/Learner/Password.css';

const PasswordChange = () => {
    const [learnerId] = useState(sessionStorage.getItem('UserSessionID'));
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validatePassword(newPassword, oldPassword, confirmPassword);
        if (validationErrors.length > 0) {
            setError(validationErrors.join(' '));
            return;
        }

        try {
            dispatch(UpdatePasswordRequest(learnerId, oldPassword, newPassword));
        } catch (error) {
            console.error('Error updating password:', error);
            setError('Old password is incorrect');
        }
    };

    return (
        <>
            <LearnerNavbar />
            <div className="d-flex justify-content-center align-items-center background_learner" style={{ height: '100vh' }}>
                <Card className="custom-card_learner">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Old Password:</Form.Label>
                                <Form.Control
                                    className="custom-form-control_learner"
                                    type="password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>New Password:</Form.Label>
                                <Form.Control
                                    className="custom-form-control_learner"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm New Password:</Form.Label>
                                <Form.Control
                                    className="custom-form-control_learner"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <Button className="custom-button" type="submit">
                                Change Password
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default PasswordChange;