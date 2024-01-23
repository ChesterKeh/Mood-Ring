import { useState } from "react";
import { Modal } from "react-overlays";
import { createJournal } from "../../utilities/journal-service"
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateJournalModal({ showCreateJournal, setShowCreateJournal }){
    const [startDate, setStartDate] = useState(new Date());
    const [journalData, setJournalData] = useState({});
    const dropdownOptions = [
        { value: 'Dreamy', label: 'Dreamy' },
        { value: 'Energetic', label: 'Energetic' },
        { value: 'Inspired', label: 'Inspired' }, 
        { value: 'Calm', label: 'Calm' }, 
        { value: 'Introspective', label: 'Introspective' }
    ];

  //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const hideModal = () => {
    setShowCreateJournal(false);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      const dateData = {"date" : new Date(startDate.getTime())};
      const response = await createJournal(Object.assign({}, journalData, dateData));
      console.log(response);
  }

  const handleChange = (journal) => {
      setJournalData({...journalData, [journal.target.name]: journal.target.value});
  };

  const dropdownChange = (event) => {
      setJournalData({...journalData, "mood": event.value});
  }

  return (
      <Modal className="modal" 
              show={showCreateJournal} 
              onHide={hideModal} 
              renderBackdrop={renderBackdrop}>
          <div>
              <label>Add Journal</label>
              <form onSubmit={handleSubmit}>
                  <label>Title: <input name="title" onChange={handleChange}/></label><br/>
                  <label>Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></label><br/>
                  <Select name="mood" options={dropdownOptions} onChange={dropdownChange} placeholder="Create Item" />
                  <label>
                      Description:
                      <textarea name="body" onChange={handleChange} rows={4} cols={40}/>
                  </label><br/>
                  <button type="submit">Add</button>
              </form>
              <button onClick={hideModal}>Close</button>
          </div>
      </Modal>
  );
}