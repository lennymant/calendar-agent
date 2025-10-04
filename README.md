# Door4 Calendar Agent Demo

A simple web form that creates calendar events with automatic guest invitations for the Door4 AI agent demo.

## 🚀 Live Demo

**[Try the Calendar Agent Demo →](https://lennymant.github.io/calendar-agent/)**

The form is hosted on GitHub Pages and ready to use!

## Features

- **Fixed Date**: Automatically sets to Thursday, October 9th, 2025
- **Random Start Time**: Generates random half-hourly start times (editable)
- **Auto End Time**: Automatically calculates end time (1 hour after start)
- **Auto Invite**: Automatically invites Leon Calverley to all events
- **Clean UI**: Modern white design with smooth interactions
- **Multiple Formats**: Supports Google Calendar and ICS download

## How It Works

1. Fill in the form with any details (verb, mobile, location)
2. The form automatically sets a random start time
3. Click "Create event in Google Calendar" to open Google Calendar with:
   - Pre-filled event details
   - Leon Calverley automatically invited
   - Fixed date of October 9th, 2025

## Privacy

- No data is stored in any CRM
- Users will receive SMS and email when the agent runs
- All data is processed client-side only

## Usage

Simply open `index.html` in a web browser. No server or build process required.

## Demo Purpose

This form is designed for demonstrating Door4's AI calendar agent capabilities. It creates realistic calendar events that can be processed by the agent to showcase AI-powered calendar management.

## Technical Details

- Pure HTML/CSS/JavaScript (no dependencies)
- Uses Google Calendar's template URL format
- Generates ICS files for Outlook/Apple Calendar compatibility
- Responsive design for mobile and desktop
