# Vocabulary Quiz

A simple, mobile-focused vocabulary quiz web application where users translate Finnish words to English by selecting from 4 multiple-choice options.

## Features

- **Randomization**: Questions are randomized once at the start of the quiz.
- **Progress Persistence**: Quiz progress (current question and score) is stored in localStorage, allowing users to resume where they left off.
- **Satisfying UX**: Includes smooth animations (slide transitions between questions, feedback effects) and subtle sound effects for correct/incorrect answers.
- **Minimal Design**: Follows proven UX standards with a clean, centered layout, progress bar, and immediate feedback.
- **Fast Interaction**: Auto-advances to the next question on correct answers; requires manual "Next" click on incorrect answers, with correct answer highlighted.

## Requirements

- **Animations**: Uses Framer Motion for slide transitions, button hover/tap effects, and feedback animations.
- **Sounds**: Uses Howler.js for audio playback. Requires audio files in `public/sounds/`:
  - `correct.mp3`: Played on correct answers.
  - `incorrect.mp3`: Played on incorrect answers.
- **Accessibility**: High contrast, keyboard navigation, and optional sound toggle (not yet implemented).
- **Mobile-First**: Responsive design optimized for mobile devices.

## Setup

1. Ensure dependencies are installed: `npm install framer-motion howler @types/howler`.
2. Add audio files to `public/sounds/correct.mp3` and `public/sounds/incorrect.mp3`.
3. Access the quiz at `/quiz` in the browser.

## Data

Quiz data is stored in `vocabData.json` as an array of objects with `word`, `correct`, and `options`.
