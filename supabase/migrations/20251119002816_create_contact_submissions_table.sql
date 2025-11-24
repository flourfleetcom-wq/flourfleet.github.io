/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - unique identifier for each submission
      - `first_name` (text) - first name of person submitting
      - `last_name` (text) - last name of person submitting
      - `email` (text) - email address for reply
      - `phone` (text, optional) - phone number for contact
      - `service_type` (text) - type of service inquiry: personal, business, international, or unsure
      - `message` (text) - main inquiry message
      - `created_at` (timestamp) - when the submission was created
      - `status` (text) - status of submission: pending or processed

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy allowing anyone to insert new submissions
    - Add policy for service role to read all submissions
    - Policy ensures public submissions are captured for business enquiries
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_type text NOT NULL DEFAULT 'unsure',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);
