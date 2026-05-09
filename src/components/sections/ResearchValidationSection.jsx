import { motion } from 'framer-motion'
import { FiBarChart2, FiBook, FiClipboard, FiSettings, FiUsers } from 'react-icons/fi'

const blocks = [
  {
    icon: FiBook,
    title: 'Literature review',
    text: 'Current research in Human Pose Estimation (HPE) is shifting from expensive, marker-based systems to accessible, marker-less frameworks like MediaPipe that extract 3D skeletal keypoints from standard RGB video. However, standard models often struggle with the deep, wide stances and unique biomechanics of South Asian dances like the "Mandiya" posture. To capture the explosive footwork and leap kinetics of Pahatharata, recent studies suggest integrating Long Short-Term Memory (LSTM) networks and Dynamic Time Warping (DTW) to model temporal dynamics and align learner movements with expert "gold standard" performances.',
  },
  {
    icon: FiClipboard,
    title: 'Methodology',
    text: 'The research follows a Design Science Research (DSR) methodology to develop a novel technological artifact for dance pedagogy. The technical pipeline utilizes Python and OpenCV for video frame processing and MediaPipe (BlazePose) for real-time 3D landmark detection. A core component of the methodology is the use of Dynamic Time Warping (DTW) to analyze the similarity between continuous sequences of hand gestures (ilangam saraba) and footwork (pa saraba). The system is designed as a Progressive Web App (PWA) to ensure offline functionality and accessibility for rural learners..  ',
  },
  {
    icon: FiUsers,
    title: 'Data collection',
    text: 'Ground truth data is gathered by recording certified Pahatharata gurus performing foundational dance sequences. These recordings are processed using a Hip-Center Normalization algorithm to extract 33 three-dimensional body landmarks, ensuring the dataset is independent of camera distance or user height. All data collection is conducted with written informed consent, and video recordings are stored securely to maintain personal privacy and comply with ethical research standards.',
  },
  {
    icon: FiSettings,
    title: 'Experiment setup',
    text: 'The high-level system architecture consists of four primary tiers: Video Capture, Body Tracking, Smart Analysis, and Dancer Feedback. The experimental setup involves capturing a 30 FPS RGB stream through a webcam, which is then normalized and processed through a 60-frame temporal sliding window. The system matches these live coordinates against the expert reference library in real time, triggering biomechanical validation for torso alignment, arm symmetry, and rhythmic footwork patterns.',
  },
  {
    icon: FiBarChart2,
    title: 'Expected Results',
    text: 'The system aims to achieve a minimum of 90% pose similarity accuracy for traditional Pahatharata movements. Performance benchmarks include maintaining a feedback delay of less than 100ms and ensuring stable operation for continuous 30-minute practice sessions. Ultimately, the research expects to demonstrate a statistically significant improvement in movement precision among beginners compared to traditional video-based learning methods.',
  },
]

function Metric({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 p-5">
      <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs text-white/55">{hint}</div>
    </div>
  )
}

export function ResearchValidationSection() {
  return (
    <section className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-white/75">Research & validation</div>
        <h2 className="mt-1 text-2xl font-semibold text-white">
          Evidence that the system works
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          This page is structured like a mini-thesis: background → method → experiments →
          results. Replace the placeholder numbers with your real measurements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {blocks.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <b.icon className="text-lg text-white/80" />
                </div>
                <div className="text-base font-semibold text-white">{b.title}</div>
              </div>
              <p className="mt-2 text-sm text-white/65">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold text-white/75">Key metrics</div>
          <div className="mt-4 grid grid-cols-1 gap-3">
            <Metric label="Pose score" value="92%" hint="Mean similarity (example)" />
            <Metric label="Latency" value="48ms" hint="End-to-end feedback (example)" />
            <Metric label="User rating" value="4.6/5" hint="Pilot session feedback (example)" />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 p-5">
            <div className="text-sm font-semibold text-white/85">What to include</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/65">
              <li>Confusion/accuracy per dance step</li>
              <li>Comparison of models or thresholds</li>
              <li>Qualitative examples of corrections</li>
              <li>User study quotes + summary</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

