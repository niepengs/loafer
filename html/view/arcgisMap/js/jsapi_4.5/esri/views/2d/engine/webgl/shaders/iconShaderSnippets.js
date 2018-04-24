// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/2d/engine/webgl/shaders/iconShaders.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\x3c!--\r\n  Add your GLSL snippets to this file. You should start from\r\n  importing your old GLSL files. For instance, if you have a\r\n  file such as myShader.vs.glsl you should create a new \x3csnippet name\x3d"myShaderVS"\x3e\r\n  and then copy and paste the GLSL source as the content. You will then convert your\r\n  code to use the {@link esri/views/2d/engine/webgl/glShaderSnippets glShaderSnippets}\r\n  instance to access the GLSL code, instead of importing it directly with require("dojo/text!...").\r\n--\x3e\r\n\x3csnippets\x3e\r\n\r\n  \x3csnippet name\x3d"rgba2floatFunc"\x3e\r\n    \x3c![CDATA[\r\n    float rgba2float(vec4 rgba) {\r\n      return dot(rgba,  vec4(1.0/16777216.0, 1.0/65535.0, 1.0/256.0, 1.0));\r\n    }\r\n    ]]\x3e\r\n  \x3c/snippet\x3e\r\n\r\n  \x3csnippet name\x3d"iconVVUniformsVS"\x3e\r\n    \x3c![CDATA[\r\n  #if defined(VV_COLOR) || defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE) || defined(VV_OPACITY) || defined(VV_ROTATION)\r\n    attribute vec4 a_vv;\r\n  #endif // VV_COLOR || VV_SIZE_MIN_MAX_VALUE || VV_SIZE_SCALE_STOPS || VV_SIZE_FIELD_STOPS || VV_SIZE_UNIT_VALUE || VV_OPACITY || VV_ROTATION\r\n\r\n  #ifdef VV_COLOR\r\n    uniform float u_vvColorValues[8];\r\n    uniform vec4 u_vvColors[8];\r\n  #endif // VV_COLOR\r\n\r\n  #ifdef VV_SIZE_MIN_MAX_VALUE\r\n    uniform vec4 u_vvSizeMinMaxValue;\r\n  #endif // VV_SIZE_MIN_MAX_VALUE\r\n\r\n  #ifdef VV_SIZE_SCALE_STOPS\r\n    uniform float u_vvSizeScaleStopsValue;\r\n  #endif // VV_SIZE_SCALE_STOPS\r\n\r\n  #ifdef VV_SIZE_FIELD_STOPS\r\n    uniform float u_vvSizeFieldStopsValues[6];\r\n    uniform float u_vvSizeFieldStopsSizes[6];\r\n  #endif // VV_SIZE_FIELD_STOPS\r\n\r\n  #ifdef VV_SIZE_UNIT_VALUE\r\n    uniform float u_vvSizeUnitValueWorldToPixelsRatio;\r\n  #endif // VV_SIZE_UNIT_VALUE\r\n\r\n  #ifdef VV_OPACITY\r\n    uniform float u_vvOpacityValues[8];\r\n    uniform float u_vvOpacities[8];\r\n  #endif // VV_OPACITY\r\n\r\n    ]]\x3e\r\n  \x3c/snippet\x3e\r\n\r\n  \x3csnippet name\x3d"iconVVFunctions"\x3e\r\n    \x3c![CDATA[\r\n  #ifdef VV_SIZE_MIN_MAX_VALUE\r\n    float getVVMinMaxSize(float sizeValue) {\r\n      // we need to multiply by 8 in order to translate to tile coordinates\r\n      float interpolationRatio \x3d (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\r\n      return clamp(u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z), u_vvSizeMinMaxValue.z, u_vvSizeMinMaxValue.w);\r\n    }\r\n  #endif // VV_SIZE_MIN_MAX_VALUE\r\n\r\n  #ifdef VV_SIZE_FIELD_STOPS\r\n    const int VV_SIZE_N \x3d 6;\r\n    float getVVStopsSize(float sizeValue) {\r\n      if (sizeValue \x3c\x3d u_vvSizeFieldStopsValues[0]) {\r\n        return u_vvSizeFieldStopsSizes[0];\r\n      }\r\n\r\n      for (int i \x3d 1; i \x3c VV_SIZE_N; ++i) {\r\n        if (u_vvSizeFieldStopsValues[i] \x3e\x3d sizeValue) {\r\n          float f \x3d (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\r\n          return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\r\n        }\r\n      }\r\n\r\n      return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\r\n    }\r\n  #endif // VV_SIZE_FIELD_STOPS\r\n\r\n  #ifdef VV_SIZE_UNIT_VALUE\r\n    float getVVUnitValue(float sizeValue) {\r\n      return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\r\n    }\r\n  #endif // VV_SIZE_UNIT_VALUE\r\n\r\n  #ifdef VV_OPACITY\r\n    const int VV_OPACITY_N \x3d 8;\r\n    float getVVOpacity(float opacityValue) {\r\n      if (opacityValue \x3c\x3d u_vvOpacityValues[0]) {\r\n        return u_vvOpacities[0];\r\n      }\r\n\r\n      for (int i \x3d 1; i \x3c VV_OPACITY_N; ++i) {\r\n        if (u_vvOpacityValues[i] \x3e\x3d opacityValue) {\r\n          float f \x3d (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\r\n          return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\r\n        }\r\n      }\r\n\r\n      return u_vvOpacities[VV_OPACITY_N - 1];\r\n    }\r\n  #endif // VV_OPACITY\r\n\r\n  #ifdef VV_ROTATION\r\n    mat4 getVVRotation(float rotationValue) {\r\n      // YF TODO: if the symbol has rotation we need to combine the symbo\'s rotation with the VV one\r\n      float angle \x3d C_DEG_TO_RAD * rotationValue;\r\n\r\n      float sinA \x3d sin(angle);\r\n      float cosA \x3d cos(angle);\r\n\r\n      return mat4(cosA, sinA, 0, 0,\r\n                  -sinA,  cosA, 0, 0,\r\n                  0,     0, 1, 0,\r\n                  0,     0, 0, 1);\r\n    }\r\n  #endif // VV_ROTATION\r\n\r\n  #ifdef VV_COLOR\r\n    const int VV_COLOR_N \x3d 8;\r\n\r\n    vec4 getVVColor(float colorValue) {\r\n      if (colorValue \x3c\x3d u_vvColorValues[0]) {\r\n        return u_vvColors[0];\r\n      }\r\n\r\n      for (int i \x3d 1; i \x3c VV_COLOR_N; ++i) {\r\n        if (u_vvColorValues[i] \x3e\x3d colorValue) {\r\n          float f \x3d (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\r\n          return mix(u_vvColors[i-1], u_vvColors[i], f);\r\n        }\r\n      }\r\n\r\n      return u_vvColors[VV_COLOR_N - 1];\r\n    }\r\n  #endif // VV_COLOR\r\n    ]]\x3e\r\n  \x3c/snippet\x3e\r\n\r\n\r\n  \x3csnippet name\x3d"iconVS"\x3e\r\n  \x3c![CDATA[\r\n    precision mediump float;\r\n\r\n    //const float C_256_TO_RAD \x3d 3.14159265359 / 128.0;\r\n    const float C_DEG_TO_RAD \x3d 3.14159265359 / 180.0;\r\n    const float C_OFFSET_PRECISION \x3d 1.0 / 64.0;\r\n\r\n    // per-vertex attributes (4 bytes)\r\n    attribute vec4 a_vertexOffsetAndTex;\r\n\r\n    // per quad (instance) attributes (20 bytes \x3d\x3d\x3e equivalent of 5 bytes per vertex)\r\n    attribute vec2 a_pos;\r\n    attribute vec4 a_id; // since we need to render the Id as a color we need to break it into RGBA components. so just like a color, the Id is normalized.\r\n    attribute vec4 a_color;\r\n    attribute vec4 a_outlineColor;\r\n    attribute vec4 a_sizeAndOutlineWidth;\r\n\r\n    // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\r\n    // relative to the tile\'s upper left corner\r\n    // the extrusion vector.\r\n    uniform highp mat4 u_transformMatrix;\r\n    // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\r\n    uniform highp mat4 u_extrudeMatrix;\r\n    // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\r\n    uniform highp vec2 u_normalized_origin;\r\n\r\n    // the size of the mosaic given in pixels\r\n    uniform vec2 u_mosaicSize;\r\n\r\n    // the opacity of the layer given by the painter\r\n    uniform mediump float u_opacity;\r\n\r\n    // the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\r\n    varying mediump vec2 v_tex;\r\n    // the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\r\n    // opacity of the layer given by the painter\r\n    varying lowp float v_transparency;\r\n    // the of the icon given in pixels\r\n    varying mediump vec2 v_size;\r\n\r\n    // icon color. If is a picture-marker it is used to tint the texture color\r\n    varying lowp vec4 v_color;\r\n\r\n #ifdef SDF\r\n    varying lowp vec4 v_outlineColor;\r\n    varying mediump float v_outlineWidth;\r\n #endif // SDF\r\n\r\n #ifdef ID\r\n    varying highp vec4 v_id;\r\n #endif // ID\r\n\r\n #ifdef HEATMAP\r\n    attribute float a_heatmapWeight;\r\n    varying mediump float v_heatmapWeight;\r\n #endif // HEATMAP\r\n\r\n    // import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)\r\n    $iconVVUniformsVS\r\n    $iconVVFunctions\r\n\r\n    void main()\r\n    {\r\n      vec2 a_offset \x3d a_vertexOffsetAndTex.xy;\r\n      vec2 a_tex \x3d a_vertexOffsetAndTex.zw;\r\n      vec2 a_size \x3d a_sizeAndOutlineWidth.xy;\r\n\r\n      // default values (we need them for the variations to come)\r\n      float a_angle \x3d 0.0;\r\n      float delta_z \x3d 0.0;\r\n      float depth \x3d 0.0;\r\n      v_transparency \x3d 1.0;\r\n\r\n  #if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\r\n\r\n  #ifdef VV_SIZE_MIN_MAX_VALUE\r\n      // vv size override the original symbol\'s size\r\n      vec2 size \x3d vec2(getVVMinMaxSize(a_vv.x));\r\n  #endif // VV_SIZE_MIN_MAX_VALUE\r\n\r\n  #ifdef VV_SIZE_SCALE_STOPS\r\n      vec2 size \x3d vec2(u_vvSizeScaleStopsValue);\r\n  #endif // VV_SIZE_SCALE_STOPS\r\n\r\n  #ifdef VV_SIZE_FIELD_STOPS\r\n      vec2 size \x3d vec2(getVVStopsSize(a_vv.x));\r\n  #endif // VV_SIZE_FIELD_STOPS\r\n\r\n  #ifdef VV_SIZE_UNIT_VALUE\r\n      vec2 size \x3d vec2(getVVUnitValue(a_vv.x));\r\n  #endif // VV_SIZE_UNIT_VALUE\r\n\r\n      vec2 offset \x3d C_OFFSET_PRECISION * a_offset * size;\r\n      v_size \x3d size;\r\n  #else\r\n  #ifdef HEATMAP\r\n      // reconstruct the kernel size\r\n      a_size \x3d 9.0 * a_size + 1.0;\r\n  #endif // HEATMAP\r\n\r\n      vec2 offset \x3d C_OFFSET_PRECISION * a_offset * a_size;\r\n      v_size \x3d a_size;\r\n  #endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\r\n\r\n  #ifdef SDF\r\n    offset *\x3d 2.0;\r\n  #endif // SDF\r\n\r\n  #ifdef VV_ROTATION\r\n      gl_Position \x3d vec4(u_normalized_origin, depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * getVVRotation(a_vv.w) * vec4(offset, delta_z, 0.0);\r\n  #else\r\n      gl_Position \x3d vec4(u_normalized_origin, depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(offset, delta_z, 0.0);\r\n  #endif // VV_ROTATION\r\n\r\n  #ifdef VV_OPACITY\r\n      v_transparency \x3d getVVOpacity(a_vv.z);\r\n  #else\r\n      v_transparency \x3d u_opacity;\r\n  #endif // VV_OPACITY\r\n\r\n  #ifdef VV_COLOR\r\n      v_color \x3d getVVColor(a_vv.y);\r\n  #else\r\n      v_color \x3d a_color;\r\n  #endif // VV_COLOR\r\n\r\n      // output the texture coordinates and the transparency\r\n      v_tex \x3d a_tex / u_mosaicSize;\r\n\r\n #ifdef SDF\r\n      v_outlineColor \x3d a_outlineColor;\r\n      v_outlineWidth \x3d a_sizeAndOutlineWidth.z;\r\n #endif // SDF\r\n\r\n #ifdef ID\r\n      v_id \x3d a_id;\r\n #endif // ID\r\n\r\n #ifdef HEATMAP\r\n    v_heatmapWeight \x3d a_heatmapWeight;\r\n #endif // HEATMAP\r\n    }\r\n  ]]\x3e\r\n  \x3c/snippet\x3e\r\n\r\n  \x3csnippet name\x3d"iconFS"\x3e\r\n   \x3c![CDATA[\r\n    precision mediump float;\r\n\r\n    uniform lowp sampler2D u_texture;\r\n\r\n    varying lowp vec2 v_tex;\r\n    varying lowp float v_transparency;\r\n    varying mediump vec2 v_size;\r\n    varying lowp vec4 v_color;\r\n\r\n #ifdef SDF\r\n    varying lowp vec4 v_outlineColor;\r\n    varying mediump float v_outlineWidth;\r\n\r\n    // we need the conversion function from RGBA to float\r\n    $rgba2floatFunc\r\n #endif // SDF\r\n\r\n #ifdef ID\r\n    varying highp vec4 v_id;\r\n #endif // ID\r\n\r\n #ifdef HEATMAP\r\n    varying mediump float v_heatmapWeight;\r\n #endif // HEATMAP\r\n\r\n    const float softEdgeRatio \x3d 1.0; // use blur here if needed\r\n\r\n    void main()\r\n    {\r\n #ifdef SDF\r\n      lowp vec4 fillPixelColor \x3d v_color;\r\n\r\n      // calculate the distance from the edge [-0.5, 0.5]\r\n      float d \x3d 0.5 - rgba2float(texture2D(u_texture, v_tex));\r\n\r\n      // Work around loss of precision for \'d \x3d 0.0\'.\r\n      // \'0\' gets normalised to 0.5 * 256 \x3d 128 before float packing, but can only\r\n      // be stored in the texture as 128 / 255 \x3d 0.502.\r\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603110\r\n      const float diff \x3d (128.0/255.0 - 0.5);\r\n\r\n      // adjust all values, not just those close to 0, to avoid discontinuities in\r\n      // the outlines of other shapes e.g. circles\r\n      d \x3d d - diff;\r\n\r\n      // the soft edge ratio is about 1.5 pixels allocated for the soft edge.\r\n      float size \x3d max(v_size.x, v_size.y);\r\n      float dist \x3d d * size * softEdgeRatio;\r\n\r\n      // set the fragment\'s transparency according to the distance from the edge\r\n      fillPixelColor *\x3d clamp(0.5 - dist, 0.0, 1.0);\r\n\r\n      // count for the outline\r\n      // therefore tint the entire icon area.\r\n      if (v_outlineWidth \x3e 0.25) {\r\n        lowp vec4 outlinePixelColor \x3d v_outlineColor;\r\n\r\n        // outlines can\'t be larger than the size of the symbol\r\n        float clampedOutlineSize \x3d min(v_outlineWidth, size);\r\n\r\n        outlinePixelColor *\x3d clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\r\n\r\n        // finally combine the outline and the fill colors (outline draws on top of fill)\r\n        gl_FragColor \x3d v_transparency * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\r\n      }\r\n      else {\r\n        gl_FragColor \x3d v_transparency * fillPixelColor;\r\n      }\r\n #else // not an SDF\r\n      lowp vec4 texColor \x3d texture2D(u_texture, v_tex);\r\n\r\n #ifdef HEATMAP\r\n      texColor.r *\x3d v_heatmapWeight;\r\n #endif // HEATMAP\r\n\r\n      gl_FragColor \x3d v_transparency * texColor;\r\n #endif // SDF\r\n\r\n #ifdef HIGHLIGHT\r\n      gl_FragColor.a \x3d step(1.0 / 255.0, gl_FragColor.a);\r\n #endif // HIGHLIGHT\r\n\r\n #ifdef ID\r\n      if (gl_FragColor.a \x3c 1.0 / 255.0) {\r\n        discard;\r\n      }\r\n      gl_FragColor \x3d v_id;\r\n #endif // ID\r\n    }\r\n   ]]\x3e\r\n  \x3c/snippet\x3e\r\n\x3c/snippets\x3e\r\n\r\n'}});
define(["require","exports","../../../../webgl/ShaderSnippets","dojo/text!./iconShaders.xml"],function(a,d,b,c){a=new b;b.parse(c,a);return a});