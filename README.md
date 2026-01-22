# 🚀 FocusFlow Development Checklist (Tauri Edition)

## 🛠 Phase 1: Inisialisasi & Setup
- [ ] **Environment Setup**
    - [ ] Install Rust & Cargo
    - [ ] Install Node.js & Package Manager (pnpm/yarn/npm)
    - [ ] Install Tauri CLI (`cargo install tauri-cli`)
- [ ] **Project Creation**
    - [ ] Jalankan `npm create tauri-app@latest`
    - [ ] Pilih Frontend Framework (React/Vue/Svelte) + TypeScript
    - [ ] Setup CSS Framework (Tailwind CSS direkomendasikan)
- [ ] **Konfigurasi Dasar (`tauri.conf.json`)**
    - [ ] Set `identifier` (com.focusflow.app)
    - [ ] Set `window` config (title, width, height, resizable)
    - [ ] Konfigurasi `allowlist` (fs, shell, dialog, notification)

## 🏗 Phase 2: Arsitektur & Backend (Rust)
- [ ] **Database Lokal**
    - [ ] Pilih Database (SQLite dengan `rusqlite`/`sqlx` atau `tauri-plugin-store` untuk JSON simpel)
    - [ ] Buat *Tauri Command* untuk inisialisasi Database saat aplikasi start
- [ ] **State Management (Frontend)**
    - [ ] Setup Store (Zustand/Redux/Pinia)
    - [ ] Buat Type/Interface untuk `Task`, `Session`, `Settings`

## 📝 Phase 3: Fitur Task Master (To-Do)
- [ ] **Backend (Rust Commands)**
    - [ ] Command `get_tasks()`
    - [ ] Command `add_task(title, category, priority)`
    - [ ] Command `update_task(id, status)`
    - [ ] Command `delete_task(id)`
- [ ] **UI/Frontend**
    - [ ] Layout Sidebar (Navigasi) & Main Content
    - [ ] Komponen `TaskItem` (Checkbox, Title, Badge Prioritas)
    - [ ] Form Input Task (Floating atau di atas list)
    - [ ] Fitur Filter (All, Today, Completed)

## 🍅 Phase 4: Fitur Deep Focus (Pomodoro)
- [ ] **Timer Logic**
    - [ ] Implementasi Timer State di Frontend
    - [ ] *Opsional (Advanced):* Pindahkan logic Timer ke Rust Thread agar tidak terhenti saat window diminimize (Throttling browser)
- [ ] **Notifikasi Native**
    - [ ] Integrasi `tauri-plugin-notification`
    - [ ] Trigger notifikasi saat waktu habis
- [ ] **Task Linking**
    - [ ] UI untuk memilih Task sebelum memulai Timer
    - [ ] Simpan log sesi ke Database setelah selesai

## 🎧 Phase 5: Fitur Zen Zone (Ambient)
- [ ] **Audio Player**
    - [ ] Integrasi Library Audio (Frontend: `Howler.js` ATAU Backend: Rust `rodio` crate)
    - [ ] *Catatan:* Jika menggunakan Rust `rodio`, buat Command `play_sound`, `set_volume`, `stop_sound`
- [ ] **Sound Library**
    - [ ] Siapkan aset audio (mp3/ogg) di folder `src-tauri/assets` atau `public`
    - [ ] UI Mixer (Slider volume untuk setiap suara)

## ⚙️ Phase 6: System Integration & Polish
- [ ] **Custom Titlebar**
    - [ ] Sembunyikan default OS titlebar (`decorations: false`)
    - [ ] Buat Custom Titlebar (Drag region, Minimize, Close buttons)
- [ ] **System Tray**
    - [ ] Implementasi Tray Icon (Klik kanan untuk Start/Stop timer atau Quit)
- [ ] **Settings**
    - [ ] Halaman pengaturan (Durasi Pomodoro, Tema Dark/Light)
    - [ ] Persistensi pengaturan (Simpan config ke disk)

## 🚀 Phase 7: Build & Release
- [ ] **Icons**
    - [ ] Generate icon app (`npm run tauri icon path/to/icon.png`)
- [ ] **Testing**
    - [ ] Test build Production (`npm run tauri build`)
    - [ ] Cek memori usage & performa
- [ ] **Distribution**
    - [ ] Build MSI/EXE (Windows)
    - [ ] Build DMG/App (macOS)
    - [ ] Build Deb/AppImage (Linux)
