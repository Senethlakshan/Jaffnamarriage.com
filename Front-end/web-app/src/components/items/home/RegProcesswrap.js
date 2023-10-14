import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import RUserInfo from './RUserInfo';
import TermsCon from './TermsCon';
import Subscription from './Subscription';
import axiosInstance from '../../../api';
import ConfirmationDialog from './userProfilePicUploader'; // Import the ConfirmationDialog component


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function RegProcesswrap() {
  const [openDialog, setOpenDialog] = useState(false);
  const [step, setStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const [values, setValues] = useState({
    // Initialize with default values or an empty object if needed
    livingPlace: '',
    religion: '',
    age: '',
    pno: '',
    cast: '',
    education: '',
    workDetails: '',
    height: '',
    weight: '',
    gender: '',
    spokenLnguage: '',
    town: '',
    agree: false,
    selectedPlans: ''
  });

  const handleChange = (fieldName, fieldValue) => {
    setValues({
      ...values,
      [fieldName]: fieldValue,
    });
  };

  const [agree, setAgree] = useState(false);

  const handleAgreeChange = () => {
    const newAgreeValue = !agree;

    setAgree(newAgreeValue);
    setValues({
      ...values, // Spread the existing values
      agree: !values.agree, // Toggle the 'agree' field
    });
  };
  const handleSelectedPlans = (selectedPlans) => {
    // Update the values state with the selected plans array
    setValues({
      ...values,
      selectedPlans, // Assuming you want to store the selected plans in values.selectedPlans
    });
  };


  const nextStep = () => {

    //console.log(values);
    if (step === 2 && agree) {
      // Only proceed to the next step (3) if agree is true in step 2
      setStep(3);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {

    axiosInstance
      .post('/insertUserDatial', values)
      .then((response) => {
        setOpenDialog(true);
      })
      .catch((error) => {

      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getStepStatus = (currentStep) => {
    if (currentStep < step) {
      return 'completed';
    } else if (currentStep === step) {
      return 'active';
    } else {
      return 'inactive';
    }
  };

  const handleCancel = () => {
    // Add your logic here to determine whether the dialog should be closed or not
    const shouldCloseDialog = true; // Set this to true or false based on your condition

    if (shouldCloseDialog) {
      setOpenDialog(false); // Close the dialog if shouldCloseDialog is true
    }
  };

  return (

    <div className="flex justify-center temsCont items-center min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300">
      {/* register form stepper window */}
      <div className="w-11/12 md:w-861 h-11/12 md:h-651 max-w-screen-lg mt-5 bg-white rounded-lg shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${getStepStatus(1) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}
              >
                {getStepStatus(1) === 'completed' ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span className="text-white">{1}</span>
                )}
              </div>
              <div
                className={`h-1 w-32 ${getStepStatus(1) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${getStepStatus(2) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}
              >
                {getStepStatus(2) === 'completed' ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span className="text-white">{2}</span>
                )}
              </div>
              <div
                className={`h-1 w-32 ${getStepStatus(2) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${getStepStatus(3) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}
              >
                {getStepStatus(3) === 'completed' ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span className="text-white">{3}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            <RUserInfo nextStep={nextStep} handleChange={handleChange} values={values} />
          )}
          {step === 2 && (
            <TermsCon
              nextStep={nextStep}
              prevStep={prevStep}
              handleAgreeChange={handleAgreeChange}
              values={values}
              agree={agree}
            />
          )}
          {step === 3 && (
            <Subscription prevStep={prevStep} handleSelectedPlans={handleSelectedPlans} values={values} />
          )}
        </div>
        <ConfirmationDialog open={openDialog} onClose={handleCancel} />
        <div className="flex justify-between p-6">
          {step !== 1 && (
            <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 text-white font-bold py-2 px-4 rounded" onClick={prevStep}>
              Previous
            </button>
          )}
          {step !== 3 ? (
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-2 px-4 rounded" onClick={nextStep} disabled={step === 2 && !agree}>
              Next
            </button>
          ) : (
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white py-2 px-4 rounded" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default RegProcesswrap;
