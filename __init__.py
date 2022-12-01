import os
import streamlit as st
import streamlit.components.v1 as components

#_RELEASE = True
#if _RELEASE:
#    root_dir = os.path.dirname(os.path.abspath(__file__))
#    build_dir = os.path.join(root_dir, "frontend/build")
#    _my_component = components.declare_component(
#        "App",
#        path = build_dir
#    )
#else:
_my_components = components.declare_component(
    "my_component",
    url="http://localhost:3001"
)

_my_components()
