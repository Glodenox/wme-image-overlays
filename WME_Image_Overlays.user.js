// ==UserScript==
// @name        WME Image Overlays
// @author      Tom 'Glodenox' Puttemans
// @namespace   http://www.tomputtemans.com/
// @description Makes it possible to add images as overlay on the Waze Map Editor
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/.*$/
// @icon        data:image/png;base64,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
// @version     0.6
// @grant       none
// ==/UserScript==

// Based on the OpenLayers.Layer.Image class
OpenLayers.Layer.OverlayImage = OpenLayers.Class(OpenLayers.Layer, {
  isBaseLayer: false,
  url: null,
  extent: null,
  size: null,
  tile: null,
  rotation: null,
  initialize: function(name, url, extent, size, options) {
    options = options || {};
    this.url = url;
    this.extent = extent;
    this.maxExtent = extent;
    this.size = size;
    this.rotation = options.rotation || 0;
    OpenLayers.Layer.prototype.initialize.apply(this, [name, options]);
  },
  destroy: function() {
    if (this.tile) {
      this.removeTileMonitoringHooks(this.tile);
      this.tile.destroy();
      this.tile = null;
    }
    OpenLayers.Layer.prototype.destroy.apply(this, arguments);
  },
  setMap: function(map) {
    OpenLayers.Layer.prototype.setMap.apply(this, arguments);
  },
  moveTo:function(bounds, zoomChanged, dragging) {
    OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
    var firstRendering = (this.tile == null);
    if (zoomChanged || firstRendering) {
      this.setTileSize();
      var ulPx = this.map.getLayerPxFromLonLat({
        lon: this.extent.left,
        lat: this.extent.top
      });

      if (firstRendering) {
        this.tile = new OpenLayers.Tile.Image(this, ulPx, this.extent, null, this.tileSize);
        this.addTileMonitoringHooks(this.tile);
      } else {
        this.tile.size = this.tileSize.clone();
        this.tile.position = ulPx.clone();
      }
      this.tile.draw();
      if (firstRendering) {
        this.setRotation(this.rotation);
      }
    }
  },
  shift: function(x, y) {
    this.extent = this.extent.add(x, y);
    var ulPx = this.map.getLayerPxFromLonLat({
      lon: this.extent.left,
      lat: this.extent.top
    });
    this.tile.position = ulPx.clone();
    this.tile.draw();
  },
  scale: function(factor) {
    this.extent = this.extent.scale(factor);
    this.setTileSize();
    var ulPx = this.map.getLayerPxFromLonLat({
      lon: this.extent.left,
      lat: this.extent.top
    });
    this.tile.position = ulPx.clone();
    this.tile.size = this.tileSize.clone();
    this.tile.draw();
  },
  rotate: function(rotation) {
    this.setRotation(this.rotation + rotation);
  },
  setTileSize: function() {
    var tileWidth = this.extent.getWidth() / this.map.getResolution();
    var tileHeight = this.extent.getHeight() / this.map.getResolution();
    this.tileSize = new OpenLayers.Size(tileWidth, tileHeight);
  },
  addTileMonitoringHooks: function(tile) {
    tile.onLoadStart = function() {
      this.events.triggerEvent("loadstart");
    };
    tile.events.register("loadstart", this, tile.onLoadStart);
    tile.onLoadEnd = function() {
      this.events.triggerEvent("loadend");
    };
    tile.events.register("loadend", this, tile.onLoadEnd);
    tile.events.register("unload", this, tile.onLoadEnd);
  },
  removeTileMonitoringHooks: function(tile) {
    tile.unload();
    tile.events.un({
      "loadstart": tile.onLoadStart,
      "loadend": tile.onLoadEnd,
      "unload": tile.onLoadEnd,
      scope: this
    });
  },
  setUrl: function(newUrl) {
    this.url = newUrl;
    this.tile.draw();
  },
  getURL: function(bounds) {
    return this.url;
  },
  setRotation: function(rotation) {
    this.rotation = rotation;
    this.tile.imgDiv.style.transform = 'rotate(' + rotation + 'deg)';
  },
  CLASS_NAME: "OpenLayers.Layer.OverlayImage"
});

function init(e) {
  if (e && e.user == null) {
    return;
  }
  if (document.getElementById('user-info') == null) {
    setTimeout(init, 500);
    log('user-info element not yet available, page still loading');
    return;
  }
  if (typeof Waze.loginManager === 'undefined') {
    setTimeout(init, 300);
    return;
  }
  if (!Waze.loginManager.hasUser()) {
    Waze.loginManager.events.register('login', null, init);
    Waze.loginManager.events.register('loginStatus', null, init);
    // Double check as event might have triggered already
    if (!Waze.loginManager.hasUser()) {
      return;
    }
  }

  // Deal with events mode
  if (Waze.app.modeController) {
    Waze.app.modeController.model.bind('change:mode', function(model, modeId) {
      if (modeId == 0) {
        addTab(tab);
      }
    });
  }

  var om_strings = {
    en: {
      tab_title: 'Image Overlays',
      add_image: 'Add image overlay',
      empty_list: 'No images added yet',
      name_missing: 'No name specified',
      hide_overlay: 'Hide overlay',
      opacity: 'Opacity',
      image_name: 'Name',
      image_edit: 'Edit image',
      image_remove: 'Remove image',
      import_image: 'Import image',
      import_image_description: 'You can now paste an image from your clipboard in the WME with Ctrl+V or select an image with the file input field below.',
      import_error: 'Could not import image, the image is probably too big to retrieve. If you used the clipboard, you may want to download the image and try the file input field above instead.',
      align_image: 'Align with map',
      align_image_description: "You can use the controls below to align the image overlay with the map. Use the 'Attach to map' button above to finish.",
      attach_image: 'Attach to map',
      cancel: 'Cancel'
    }
  };
  om_strings.en_GB = om_strings['en-US'] = om_strings.en;
  for (var i = 0; i < I18n.availableLocales.length; i++) {
    var locale = I18n.availableLocales[i];
    if (I18n.translations[locale]) {
      I18n.translations[locale].image_overlays = om_strings[locale];
    }
  }

  var tab = addTab();
  var layer = null;
  var currentBlob = null;
  var emptyList = document.createElement('span');
  emptyList.style.fontStyle = 'italic';
  emptyList.appendChild(document.createTextNode(I18n.t('image_overlays.empty_list')));
  tab.appendChild(emptyList);
  var imagesList = document.createElement('div');
  imagesList.className = 'result-list';
  imagesList.style.marginBottom = '1em';
  tab.appendChild(imagesList);
  getIndexedDB(function(db) {
    db.transaction(['overlays'], 'readonly')
      .objectStore('overlays')
      .openCursor()
      .addEventListener('success', function(e) {
      var cursor = e.target.result;
      if (cursor) {
        addImageOverlay(cursor.value.name, cursor.key);
        cursor.continue();
      }
    });
  });

  var panel = document.createElement('div');
  panel.className = 'hidden';
  panel.style.backgroundColor = '#f2f3f4';
  panel.style.padding = '15px';

  var importError = document.createElement('p');
  importError.className = 'hidden text-danger';
  importError.textContent = I18n.t('image_overlays.import_error');
  var pasteListener = function(e) {
    var items = e.clipboardData.items;
    for (var i = 0; i < items.length; ++i) {
      if (items[i].kind == 'file' && items[i].type.indexOf('image/') !== -1) {
        var blob = items[i].getAsFile();
        if (blob) {
          importError.classList.add('hidden');
          displayAlignPage(blob);
        } else {
          importError.classList.remove('hidden');
          W.map.resize();
        }
        break;
      }
    }
  };

  var cancelButton, importLabel, alignLabel, pinLabel;
  cancelButton = document.createElement('button');
  cancelButton.className = 'btn btn-default';
  cancelButton.style.position = 'absolute';
  cancelButton.style.right = '15px';
  cancelButton.style.fontSize = '14px';
  var cancelButtonIcon = document.createElement('i');
  cancelButtonIcon.className = 'fa fa-trash-o fa-fw';
  cancelButton.appendChild(cancelButtonIcon);
  cancelButton.appendChild(document.createTextNode(I18n.t('image_overlays.cancel')));
  cancelButton.addEventListener('click', function() {
    panel.classList.add('hidden');
    W.map.resize();
    removeLayer();
  });
  panel.appendChild(cancelButton);
  var breadcrumbs = document.createElement('div');
  breadcrumbs.className = 'text-center';
  breadcrumbs.style.marginBottom = '1.5em';
  var breadcrumbSeparator = document.createElement('i');
  breadcrumbSeparator.className = 'fa fa-fw fa-angle-right';
  importLabel = createBreadcrumb('download', I18n.t('image_overlays.import_image'), 'primary');
  breadcrumbs.appendChild(importLabel);
  breadcrumbs.appendChild(breadcrumbSeparator);
  alignLabel = createBreadcrumb('arrows-alt', I18n.t('image_overlays.align_image'), 'default');
  breadcrumbs.appendChild(alignLabel);
  breadcrumbs.appendChild(breadcrumbSeparator.cloneNode());
  pinLabel = createBreadcrumb('map-pin', I18n.t('image_overlays.attach_image'), 'default');
  breadcrumbs.appendChild(pinLabel);
  panel.appendChild(breadcrumbs);
  var description = document.createElement('p');
  description.className = 'text-center';
  panel.appendChild(description);
  var instructions = document.createElement('div');
  instructions.className = 'text-center';
  panel.appendChild(instructions);
  document.getElementById('map').insertBefore(panel, document.getElementById('map').firstChild);

  var addImageOverlayButton = document.createElement('button');
  addImageOverlayButton.className = 'btn btn-primary';
  var addSpan = document.createElement('span');
  addSpan.className = 'fa fa-plus';
  addSpan.style.marginRight = '5px';
  addImageOverlayButton.appendChild(addSpan);
  addImageOverlayButton.appendChild(document.createTextNode(I18n.t('image_overlays.add_image')));
  addImageOverlayButton.addEventListener('click', displayImportPage);
  tab.appendChild(addImageOverlayButton);
  var hideOverlayButton = document.createElement('button');
  hideOverlayButton.className = 'btn btn-default hidden';
  hideOverlayButton.style.float = 'right';
  hideOverlayButton.textContent = I18n.t('image_overlays.hide_overlay');
  hideOverlayButton.addEventListener('click', removeLayer);
  tab.appendChild(hideOverlayButton);

  var layerControls = document.createElement('div');
  layerControls.className = 'hidden clearfix';
  layerControls.style.marginTop = '8px';
  var opacityRange = document.createElement('input');
  opacityRange.type = 'range';
  opacityRange.min = 0;
  opacityRange.max = 50;
  opacityRange.value = 50;
  opacityRange.id = 'imageOverlaysOpacity';
  var opacityLabel = document.createElement('label');
  opacityLabel.textContent = I18n.t('image_overlays.opacity') + ': ';
  opacityLabel.htmlFor = opacityRange.id;
  layerControls.appendChild(opacityLabel);
  layerControls.appendChild(opacityRange);
  tab.appendChild(layerControls);
  var rangeListener = function() {
    if (layer) {
      layer.setOpacity(opacityRange.value / 50);
    }
  };
  opacityRange.addEventListener('input', rangeListener);
  opacityRange.addEventListener('change', rangeListener);
  

  var versionBlock = document.createElement('p');
  versionBlock.style.fontSize = '0.9em';
  versionBlock.style.marginTop = '10px';
  var versionInfo = document.createElement('a');
  versionInfo.appendChild(document.createTextNode(GM_info.script.name + ' (v' + GM_info.script.version + ')'));
  versionInfo.href = 'https://greasyfork.org/scripts/29381-wme-image-overlays';
  versionInfo.target = '_blank';
  versionBlock.appendChild(versionInfo);
  tab.appendChild(versionBlock);

  function addImageOverlay(name, key) {
    emptyList.classList.add('hidden');
    var container = document.createElement('div');
    container.className = 'result session-available';
    var remove = document.createElement('button');
    remove.style.fontSize = '14px';
    remove.style.float = 'right';
    remove.style.fontWeight = 'normal';
    remove.style.marginTop = '-6px';
    remove.className = 'fa fa-trash-o';
    remove.addEventListener('click', function(e) {
      e.stopPropagation();
      getIndexedDB(function(db) {
        db.transaction(['overlays'], 'readwrite').objectStore('overlays').delete(key).addEventListener('success', function(e) {
          container.parentNode.removeChild(container);
          removeLayer();
        });
      });
    });
    container.appendChild(remove);
    var nameContainer = document.createElement('div');
    var rename = document.createElement('button');
    rename.style.fontSize = '14px';
    rename.style.float = 'right';
    rename.style.fontWeight = 'normal';
    rename.style.marginTop = '-6px';
    rename.style.marginLeft = '4px';
    rename.className = 'fa fa-pencil';
    rename.addEventListener('click', function(e) {
      e.stopPropagation();
      getIndexedDB(function(db) {
        var objectStore = db.transaction(['overlays'], 'readwrite').objectStore('overlays');
        objectStore.get(key).addEventListener('success', function(e) {
          var overlay = e.target.result;
          var response = prompt('Please enter a new name for this image overlay', overlay.name);
          if (response && response.length > 0) {
            overlay.name = response;
            objectStore.put(overlay, key).addEventListener('success', function() {
              nameContainer.textContent = overlay.name;
              nameContainer.style.fontStyle = '';
            });
          }
        });
      });
    });
    container.appendChild(rename);
    if (name && name.length > 0) {
      nameContainer.textContent = name;
    } else {
      nameContainer.style.fontStyle = 'italic';
      nameContainer.textContent = I18n.t('image_overlays.name_missing');
    }
    container.appendChild(nameContainer);
    container.addEventListener('click', function() {
      getIndexedDB(function(db) {
        db.transaction(['overlays'], 'readonly').objectStore('overlays').get(key).addEventListener('success', function(e) {
          var overlay = e.target.result;
          overlay.extent = new OL.Bounds(overlay.extent);
          displayImageOverlay(overlay);
        });
      });
    });
    imagesList.appendChild(container);
  }

  function displayImportPage() {
    document.addEventListener('paste', pasteListener);
    importLabel.className = 'label label-primary';
    alignLabel.className = 'label label-default';
    pinLabel.style.cursor = 'default';
    pinLabel.removeEventListener('click', pinToMap);
    removeLayer();
    
    description.textContent = I18n.t('image_overlays.import_image_description');
    var addImageInput = document.createElement('input');
    addImageInput.type = 'file';
    addImageInput.accepts = 'image/*';
    addImageInput.className = 'center-block';
    addImageInput.addEventListener('change', function() {
      displayAlignPage(addImageInput.files[0]);
    });
    instructions.textContent = '';
    instructions.appendChild(addImageInput);
    instructions.appendChild(importError);
    panel.classList.remove('hidden');
    W.map.resize();
  }

  function displayAlignPage(blob) {
    currentBlob = blob;
    document.removeEventListener('paste', pasteListener);
    importLabel.className = 'label label-success';
    alignLabel.className = 'label label-primary';

    displayImageOverlay({
      'blob': blob,
      'extent': W.map.getExtent(),
      'rotation': 0
    }, true);

    pinLabel.style.cursor = 'pointer';
    pinLabel.addEventListener('click', pinToMap);

    description.textContent = I18n.t('image_overlays.align_image_description');
    instructions.textContent = '';
    instructions.appendChild(createControlButton('rotate-left', function() {
      layer.rotate(-45);
    }, '45°'));
    instructions.appendChild(createControlButton('rotate-left', function() {
      layer.rotate(-0.5);
    }));
    instructions.appendChild(createControlButton('arrow-up', function() {
      layer.shift(0, 10 * W.map.getResolution());
    }));
    instructions.appendChild(createControlButton('rotate-right', function() {
      layer.rotate(0.5);
    }));
    instructions.appendChild(createControlButton('rotate-right', function() {
      layer.rotate(45);
    }, '45°'));
    instructions.appendChild(document.createElement('br'));
    instructions.appendChild(createControlButton('arrow-left', function() {
      layer.shift(-10 * W.map.getResolution(), 0);
    }));
    instructions.appendChild(createControlButton('crosshairs', function() {
      var layerCenter = layer.extent.getCenterLonLat();
      layer.shift(W.map.getCenter().lon - layerCenter.lon, W.map.getCenter().lat - layerCenter.lat);
    }));
    instructions.appendChild(createControlButton('arrow-right', function() {
      layer.shift(10 * W.map.getResolution(), 0);
    }));
    instructions.appendChild(document.createElement('br'));
    instructions.appendChild(createControlButton('minus', function() {
      layer.scale(1 - (0.05 * W.map.getResolution()));
    }));
    instructions.appendChild(createControlButton('arrow-down', function() {
      layer.shift(0, -10 * W.map.getResolution());
    }));
    instructions.appendChild(createControlButton('plus', function() {
      layer.scale(1 + (0.05 * W.map.getResolution()));
    }));

    W.map.resize();
  }

  function pinToMap() {
    getIndexedDB(function(db) {
      var obj = {
        'blob': currentBlob,
        'name': currentBlob.name,
        'extent': layer.extent.toArray(),
        'rotation': layer.rotation
      };
      var req = db.transaction(['overlays'], 'readwrite').objectStore('overlays').add(obj);
      req.addEventListener('success', function(e) {
        panel.className = 'hidden';
        W.map.resize();
        addImageOverlay(obj.name, e.target.result);
      });
    });
  }

  function displayImageOverlay(overlay, rescale) {
    var url = window.URL.createObjectURL(overlay.blob);
    var img = document.createElement('img');
    img.addEventListener('load', function() {
      removeLayer();
      if (rescale) {
        var mapExtentAspectRatio = overlay.extent.getWidth() / overlay.extent.getHeight();
        var imageAspectRatio = img.naturalWidth / img.naturalHeight;
        if (mapExtentAspectRatio > imageAspectRatio) {
          var widthDiff = overlay.extent.getWidth() - (overlay.extent.getHeight() * imageAspectRatio);
          overlay.extent = new OL.Bounds([overlay.extent.left + widthDiff/2 , overlay.extent.bottom, overlay.extent.right - widthDiff/2, overlay.extent.top]);
        } else {
          var heightDiff = overlay.extent.getHeight() - (overlay.extent.getWidth() / imageAspectRatio);
          overlay.extent = new OL.Bounds([overlay.extent.left, overlay.extent.bottom + heightDiff/2, overlay.extent.right, overlay.extent.top - heightDiff/2]);
        }
        overlay.extent = overlay.extent.scale(0.8);
      }
      layer = new OL.Layer.OverlayImage('Image Overlay', url, overlay.extent, new OL.Size(img.naturalWidth, img.naturalHeight), { 'rotation': overlay.rotation });
      Waze.map.addLayer(layer);
      layer.setOpacity(opacityRange.value / 50);
      layerControls.classList.remove('hidden');
      hideOverlayButton.classList.remove('hidden');
      var aerialImageryIndex = Waze.map.getLayerIndex(Waze.map.getLayerByUniqueName('satellite_imagery'));
      Waze.map.setLayerIndex(layer, aerialImageryIndex+1);
      W.map.zoomToExtent(overlay.extent);
    });
    img.src = url;
  }

  function removeLayer() {
    if (layer) {
      W.map.removeLayer(layer);
      layer = null;
      layerControls.classList.add('hidden');
      hideOverlayButton.classList.add('hidden');
    }
  }
}

// Create a tab and possibly receive a previous tab to restore (usually in case of a mode change)
function addTab(recoveredTab) {
  var userInfo = document.getElementById('user-info'),
      tabHandles = userInfo.querySelector('.nav-tabs'),
      tabs = userInfo.querySelector('.tab-content'),
      tabHandle = document.createElement('li'),
      tab = document.createElement('div');
  tabHandle.innerHTML = '<a href="#sidepanel-imageoverlays" data-toggle="tab" title="' + I18n.t('image_overlays.tab_title') + '"><span class="fa fa-picture-o"></span></a>';
  if (recoveredTab) {
    tab = recoveredTab;
  } else {
    tab.id = 'sidepanel-imageoverlays';
    tab.className = 'tab-pane';
  }
  tabHandles.appendChild(tabHandle);
  $(tabHandle.childNodes[0]).tooltip();
  tabs.appendChild(tab);
  return tab;
}

function createBreadcrumb(icon, text, status) {
  var label = document.createElement('span');
  label.className = 'label label-' + status;
  label.style.fontSize = '1.2em';
  label.style.cursor = 'default';
  var i = document.createElement('i');
  i.className = 'fa fa-fw fa-' + icon;
  label.appendChild(i);
  label.appendChild(document.createTextNode(' ' + text));
  return label;
}

function createControlButton(icon, callback, text) {
  var controlButton = document.createElement('button');
  var controlButtonIcon = document.createElement('i');
  controlButtonIcon.className = 'fa fa-fw fa-' + icon;
  controlButton.appendChild(controlButtonIcon);
  if (text) {
    controlButton.appendChild(document.createTextNode(' ' + text));
  }
  controlButton.addEventListener('click', callback);
  return controlButton;
}

function getIndexedDB(callback) {
  var req = indexedDB.open('ImageOverlays', 1);
  req.addEventListener('upgradeneeded', function(e) {
    e.target.result.createObjectStore('overlays', { autoIncrement: true });
  });
  req.addEventListener('error', log);
  req.addEventListener('success', function(e) {
    callback(e.target.result);
  });
}

function log(message) {
  if (typeof message === 'string') {
    console.log('%c' + GM_info.script.name + ' (v' + GM_info.script.version + '): %c' + message, 'color:black', 'color:#d97e00');
  } else {
    console.log('%c' + GM_info.script.name + ' (v' + GM_info.script.version + ')', 'color:black', message);
  }
}

init();