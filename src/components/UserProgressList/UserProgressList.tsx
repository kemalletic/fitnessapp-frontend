import React, { useState, ChangeEvent } from 'react';
import UserProgressCard from '../UserProgressCard';
import { UserProgress } from '../../utils/types';

type Props = {};

const UserProgressList: React.FC<Props> = () => {
  const [userProgressListState, setUserProgressList] = useState<UserProgress[]>([]);
  const [showForm, setShowForm] = useState(false); // Start with the form closed
  const [editIndex, setEditIndex] = useState<number | null>(null); // Track the index of the item being edited
  const [formData, setFormData] = useState<UserProgress>({
    id: '',
    startWeight: 0,
    currentWeight: 0,
    startBodyFatPercentage: 0,
    currentBodyFatPercentage: 0,
  });

  const handleEdit = (index: number) => {
    setFormData(userProgressListState[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleRemove = (index: number) => {
    const updatedList = [...userProgressListState];
    updatedList.splice(index, 1);
    setUserProgressList(updatedList);
    setShowForm(false); // Close the form after removing progress
    setEditIndex(null); // Reset editIndex
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      id: '',
      startWeight: 0,
      currentWeight: 0,
      startBodyFatPercentage: 0,
      currentBodyFatPercentage: 0,
    });
    setEditIndex(null); // Reset editIndex
  };

  const handleAddUserProgress = () => {
    if (editIndex !== null) {
      // If editing, update the item
      const updatedList = [...userProgressListState];
      updatedList[editIndex] = formData;
      setUserProgressList(updatedList);
      setEditIndex(null);
    } else {
      // If adding, create a new item
      setUserProgressList([...userProgressListState, { ...formData, id: Math.random().toString() }]);
    }
    setShowForm(false);
    setFormData({
      id: '',
      startWeight: 0,
      currentWeight: 0,
      startBodyFatPercentage: 0,
      currentBodyFatPercentage: 0,
    });
  };

  const handleAddUserProgressButton = () => {
    setShowForm(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name.includes('Weight') ? parseFloat(value) : parseInt(value, 10),
    }));
  };

  return (
    <>
      <div className="row">
        {userProgressListState.map((userProgress, index) => (
          <UserProgressCard
            key={userProgress.id}
            userProgress={userProgress}
            onEdit={() => handleEdit(index)}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </div>

      <div className="mt-4">
        {showForm ? (
          <>
            <h3>{editIndex !== null ? 'Edit' : 'Set Your'} Progress</h3>
            <form>
              <div className="form-group">
                <label>Start Weight:</label>
                <input
                  type="text"
                  name="startWeight"
                  value={formData.startWeight}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Current Weight:</label>
                <input
                  type="text"
                  name="currentWeight"
                  value={formData.currentWeight}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Start Body Fat Percentage:</label>
                <input
                  type="text"
                  name="startBodyFatPercentage"
                  value={formData.startBodyFatPercentage}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Current Body Fat Percentage:</label>
                <input
                  type="text"
                  name="currentBodyFatPercentage"
                  value={formData.currentBodyFatPercentage}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <button type="button" className="btn btn-success" onClick={handleAddUserProgress}>
                {editIndex !== null ? 'Save' : 'Add'}
              </button>
              <button type="button" className="btn btn-secondary ml-2" onClick={handleCloseForm}>
                Cancel
              </button>
            </form>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddUserProgressButton}
            disabled={userProgressListState.length > 0}
          >
            Add Your Progress
          </button>
        )}
      </div>
    </>
  );
};

export default UserProgressList;
