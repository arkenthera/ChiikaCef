// Copyright (c) 2015 The Chromium Embedded Framework Authors. All rights
// reserved. Use of this source code is governed by a BSD-style license that
// can be found in the LICENSE file.

#include "Chiika/browser/root_window.h"

#include "Chiika/browser/main_context.h"
#include "Chiika/browser/root_window_manager.h"

namespace client {

// static
scoped_refptr<RootWindow> RootWindow::GetForBrowser(int browser_id) {
  return MainContext::Get()->GetRootWindowManager()->GetWindowForBrowser(
      browser_id);
}

}  // namespace client
