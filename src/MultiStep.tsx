// src/MultiStepForm.tsx
import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from '@/components/Step4';
import Step5 from '@/components/Step5';
import Final from './components/FinalStep';
import No from '@/components/No';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const noStep = () => setStep(7); // Set step to a value that shows the No component

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} noStep={noStep} />;
    case 2:
      return <Step2 nextStep={nextStep} />;
    case 3:
      return <Step3 nextStep={nextStep} />;
    case 4:
      return <Step4 nextStep={nextStep} />;
    case 5:
      return <Step5 nextStep={nextStep} />;
    case 6:
      return <Final nextStep={nextStep} />;
    case 7: // Add a new case for step 7
      return <No />;
    default:
      return <No />;
  }
};

export default MultiStepForm;
