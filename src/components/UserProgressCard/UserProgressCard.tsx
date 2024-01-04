import React from 'react';
import { UserProgress } from '../../utils/types';

type Props = {
  userProgress: UserProgress;
  onRemove: () => void;
  onEdit: () => void;
};

const UserProgressCard: React.FC<Props> = ({ userProgress, onRemove, onEdit }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 m-3">
      <div className="card">
        <div className="card-header">ID: {userProgress.id}</div>
        <div className="card-body">
          <div className="form-group">
            <p className="card-text">
              <strong>Start Weight:</strong> {userProgress.startWeight} kg
            </p>
          </div>
          <div className="form-group">
            <p className="card-text">
              <strong>Current Weight:</strong> {userProgress.currentWeight} kg
            </p>
          </div>
          <div className="form-group">
            <p className="card-text">
              <strong>Start Body Fat Percentage:</strong> {userProgress.startBodyFatPercentage}%
            </p>
          </div>
          <div className="form-group">
            <p className="card-text">
              <strong>Current Body Fat Percentage:</strong> {userProgress.currentBodyFatPercentage}%
            </p>
          </div>
          <hr className="my-4" />
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning" onClick={onEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={onRemove}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProgressCard;
